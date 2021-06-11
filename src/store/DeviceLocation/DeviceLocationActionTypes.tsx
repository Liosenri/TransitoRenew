import {Region} from 'react-native-maps';
import {ResetFormActionType} from '../InfractionForm/InfractionFormActionTypes';
export interface DeviceLocationReducerStateType {
  region?: Region | null;
  reversingCoordinate: boolean;
  errorDescription?: string | null;
  address: string | null;
}

export const REVERSE_GEOCODE_COORDINATE = 'REVERSE_GEOCODE_COORDINATE';

export const REVERSE_GEOCODE_COORDINATE_FAIL =
  'REVERSE_GEOCODE_COORDINATE_FAIL';

export const UPDATE_REGION_AND_ADDRESS = 'UPDATE_REGION_AND_ADDRESS';

interface ReverseGeocodeCoordinateActionType {
  type: typeof REVERSE_GEOCODE_COORDINATE;
}

interface ReverseGeocodeCoordinateFailActionType {
  type: typeof REVERSE_GEOCODE_COORDINATE_FAIL;
  payload: {errorDescription: string};
}

interface UpdateRegionAndAddressActionType {
  type: typeof UPDATE_REGION_AND_ADDRESS;
  payload: {region: Region; address: string};
}

export type DeviceLocationActionTypes =
  | ReverseGeocodeCoordinateActionType
  | ReverseGeocodeCoordinateFailActionType
  | UpdateRegionAndAddressActionType
  | ResetFormActionType;
