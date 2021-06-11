import {RESET_FORM} from '../InfractionForm/InfractionFormActionTypes';
import {
  REVERSE_GEOCODE_COORDINATE,
  REVERSE_GEOCODE_COORDINATE_FAIL,
  UPDATE_REGION_AND_ADDRESS,
  DeviceLocationReducerStateType,
  DeviceLocationActionTypes,
} from './DeviceLocationActionTypes';

const initialState: DeviceLocationReducerStateType = {
  region: null,
  errorDescription: null,
  reversingCoordinate: false,
  address: null,
};

export default (
  state = initialState,
  action: DeviceLocationActionTypes,
): DeviceLocationReducerStateType => {
  switch (action.type) {
    case REVERSE_GEOCODE_COORDINATE:
      return {...state, reversingCoordinate: true, errorDescription: null};
    case UPDATE_REGION_AND_ADDRESS:
      return {
        ...state,
        reversingCoordinate: false,
        region: action.payload.region,
        address: action.payload.address,
      };
    case REVERSE_GEOCODE_COORDINATE_FAIL:
      return {
        ...state,
        reversingCoordinate: false,
        errorDescription: action.payload.errorDescription,
      };
    case RESET_FORM:
      return initialState;
    default:
      return state;
  }
};
