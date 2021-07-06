import React, {RefObject} from 'react';
import {ToastAndroid} from 'react-native';
import {
  GooglePlacesAutocomplete,
  GooglePlacesAutocompleteRef,
} from 'react-native-google-places-autocomplete';
import {Region} from 'react-native-maps';

import {
  DEFAULT_COORDINATE_DELTA,
  MARGIN_SIZE,
  MEDIUM_MARGIN_SIZE,
} from '@/constants';

interface Props {
  searchBarRef: RefObject<GooglePlacesAutocompleteRef>;
  onResultPress: (region: Region, formattedAddress: string) => void;
}

const index = ({searchBarRef, onResultPress}: Props) => {
  return (
    <GooglePlacesAutocomplete
      styles={{
        container: {
          position: 'absolute',
          top: MEDIUM_MARGIN_SIZE,
          left: MARGIN_SIZE,
          right: MARGIN_SIZE,
        },
        textInput: {flex: 1, fontFamily: 'NeoSansPro-Bold'},
      }}
      ref={searchBarRef}
      placeholder="Buscar Dirección"
      fetchDetails={true}
      onPress={(_data, details = null) => {
        if (details) {
          const {
            geometry: {
              location: {lat, lng},
            },
            formatted_address,
          } = details;
          const region: Region = {
            latitude: lat,
            latitudeDelta: DEFAULT_COORDINATE_DELTA,
            longitude: lng,
            longitudeDelta: DEFAULT_COORDINATE_DELTA,
          };
          onResultPress(region, formatted_address);
        } else {
          ToastAndroid.show(
            'No se encontraron datos para esa ubicación!',
            ToastAndroid.SHORT,
          );
        }
      }}
      debounce={1000}
      query={{
        key: 'AIzaSyBaW7z5jUvarwdyKA7iawqMr5nQ3d_3v04',
        language: 'es',
        components: 'country:mx',
      }}
    />
  );
};

export default index;
