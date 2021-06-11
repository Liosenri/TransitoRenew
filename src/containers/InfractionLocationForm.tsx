import React, {useEffect, useRef, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {GooglePlacesSearchBar, NextBackButtonsView} from '@/components';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  updatedRegionAndAddressAction,
  updatedRegionAndAddressUsingDeviceLocatiionAction,
} from '@/store/DeviceLocation/DeviceLocationActions';
import {StoreStateType} from '@/store';
import {GooglePlacesAutocompleteRef} from 'react-native-google-places-autocomplete';
import {createErrorAlert} from '@/utils/Alerts';

interface Props {
  onContinue: () => void;
  onBack: () => void;
}
const InfractionLocationForm = ({onBack, onContinue}: Props) => {
  const mapRef = useRef<MapView>(null);
  const searchRef = useRef<GooglePlacesAutocompleteRef>(null);
  const [mapMounted, setMapMounted] = useState(false);
  const dispatch = useDispatch();

  const {address, region, errorDescription} = useSelector(
    (state: StoreStateType) => state.DeviceLocationReducer,
  );

  useEffect(() => {
    if (!address && mapMounted) {
      dispatch(updatedRegionAndAddressUsingDeviceLocatiionAction());
    }
  }, [address, dispatch, mapMounted]);

  useEffect(() => {
    if (address && searchRef) {
      searchRef.current?.setAddressText(address);
    }
  }, [address, searchRef]);

  useEffect(() => {
    if (region && mapMounted) {
      mapRef.current?.animateToRegion(region);
    }
  }, [region, mapMounted]);

  useEffect(() => {
    if (errorDescription) {
      createErrorAlert('Error', errorDescription);
    }
  }, [errorDescription]);

  const validateRegion = () =>
    region
      ? onContinue()
      : createErrorAlert(
          'Error',
          'Para poder continuar necesita seleccionar una ubicación',
        );

  return (
    <View style={styles.container}>
      <MapView
        onLayout={() => setMapMounted(true)}
        ref={mapRef}
        style={styles.container}>
        {region && <Marker coordinate={{...region}} />}
      </MapView>
      <GooglePlacesSearchBar
        searchBarRef={searchRef}
        onResultPress={(reg, add) =>
          dispatch(updatedRegionAndAddressAction(reg, add))
        }
      />
      <NextBackButtonsView onBack={onBack} onContinue={validateRegion} />
    </View>
  );
};

export default InfractionLocationForm;

const styles = StyleSheet.create({container: {flex: 1}});
