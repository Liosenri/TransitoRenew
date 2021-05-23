import {
  REVERSE_GEOCODE_COORDINATE,
  REVERSE_GEOCODE_COORDINATE_FAIL,
  UPDATE_REGION_AND_ADDRESS,
  DeviceLocationActionTypes,
} from './DeviceLocationActionTypes';
import {Region} from 'react-native-maps';
import {getDeviceLocation} from '@/utils/Location';
import {DEFAULT_COORDINATE_DELTA} from '@/constants';
import {StoreStateType} from '..';
import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {googlePlacesReverseCoordinate} from '@/api/GooglePlaces';

export const reverseGeocodeCoordinateAction = (): DeviceLocationActionTypes => ({
  type: REVERSE_GEOCODE_COORDINATE,
});

export const reverseGeocodeCoordinateFailAction = (
  errorDescription: string,
): DeviceLocationActionTypes => ({
  type: REVERSE_GEOCODE_COORDINATE_FAIL,
  payload: {errorDescription},
});

export const updatedRegionAndAddressAction = (
  region: Region,
  address: string,
): DeviceLocationActionTypes => ({
  type: UPDATE_REGION_AND_ADDRESS,
  payload: {region, address},
});

export const updatedRegionAndAddressUsingDeviceLocatiionAction = (): ThunkAction<
  void,
  StoreStateType,
  unknown,
  Action<string>
> => async (dispatch, _) => {
  dispatch(reverseGeocodeCoordinateAction());
  try {
    const location = await getDeviceLocation();
    const results = await googlePlacesReverseCoordinate(location);

    const address = results.length
      ? results[0].formatted_address
      : 'Dirección desconocida';

    const region: Region = {
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: DEFAULT_COORDINATE_DELTA,
      longitudeDelta: DEFAULT_COORDINATE_DELTA,
    };

    dispatch(updatedRegionAndAddressAction(region, address));
  } catch (error) {
    dispatch(reverseGeocodeCoordinateFailAction(error));
  }
};
