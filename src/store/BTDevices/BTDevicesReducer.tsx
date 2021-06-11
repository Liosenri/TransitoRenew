import {
  BTDevicesActionType,
  BTDevicesReducerStateType,
  SCAN_BT_DEVICES,
  SCAN_BT_DEVICES_FAILURE,
  SCAN_BT_DEVICES_SUCCESS,
  CONNECT_TO_BT_DEVICE,
  CONNECT_TO_BT_DEVICE_FAILURE,
  CONNECT_TO_BT_DEVICE_SUCCESS,
  BT_DEVICE_DISCONNECTED,
} from './BTDevicesActionTypes';

const initialState: BTDevicesReducerStateType = {
  devices: null,
  scanning: false,
  scanningError: null,
  connectingError: null,
  connectedDeviceMacAddress: null,
  connecting: false,
};

export default (
  state = initialState,
  action: BTDevicesActionType,
): BTDevicesReducerStateType => {
  switch (action.type) {
    case SCAN_BT_DEVICES:
      return {...state, scanning: true, scanningError: null, devices: []};
    case SCAN_BT_DEVICES_SUCCESS:
      return {...state, scanning: false, devices: action.payload};
    case SCAN_BT_DEVICES_FAILURE:
      return {...state, scanning: false, scanningError: action.payload};
    case CONNECT_TO_BT_DEVICE:
      return {
        ...state,
        connecting: true,
        connectingError: null,
        connectedDeviceMacAddress: null,
      };
    case CONNECT_TO_BT_DEVICE_SUCCESS:
      return {
        ...state,
        connecting: false,
        connectedDeviceMacAddress: action.payload,
      };
    case CONNECT_TO_BT_DEVICE_FAILURE:
      return {...state, connecting: false, connectingError: action.payload};
    case BT_DEVICE_DISCONNECTED:
      return {...state, connectedDeviceMacAddress: null};
    default:
      return state;
  }
};
