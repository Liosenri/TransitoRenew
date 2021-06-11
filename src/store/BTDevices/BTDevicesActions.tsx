import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {StoreStateType} from '@/store';
import {
  BTDevicesActionType,
  SCAN_BT_DEVICES,
  SCAN_BT_DEVICES_FAILURE,
  SCAN_BT_DEVICES_SUCCESS,
  CONNECT_TO_BT_DEVICE,
  CONNECT_TO_BT_DEVICE_FAILURE,
  CONNECT_TO_BT_DEVICE_SUCCESS,
  BT_DEVICE_DISCONNECTED,
} from './BTDevicesActionTypes';
import BT, {BTDeviceType} from '@/utils/Bluetooth';
// @ts-ignore
import EscPos from '@leesiongchan/react-native-esc-pos';

export const scanBTDevicesFailureAction = (
  error: string,
): BTDevicesActionType => ({
  type: SCAN_BT_DEVICES_FAILURE,
  payload: error,
});

export const scanBTDevicesSuccessAction = (
  devices: BTDeviceType[],
): BTDevicesActionType => ({type: SCAN_BT_DEVICES_SUCCESS, payload: devices});

export const scanBTDevicesAction = (): ThunkAction<
  void,
  StoreStateType,
  BTDevicesActionType,
  Action<string>
> => async dispatch => {
  dispatch({type: SCAN_BT_DEVICES});
  try {
    const devices = await BT.scanBTDevices();
    return dispatch(scanBTDevicesSuccessAction(devices.paired));
  } catch (error) {
    return dispatch(scanBTDevicesFailureAction(error.message));
  }
};

export const connectToBTDeviceSuccessAction = (
  macAddress: string,
): BTDevicesActionType => ({
  type: CONNECT_TO_BT_DEVICE_SUCCESS,
  payload: macAddress,
});

export const connectToBTDeviceFailureAction = (
  error: string,
): BTDevicesActionType => ({
  type: CONNECT_TO_BT_DEVICE_FAILURE,
  payload: error,
});

export const btDeviceDisconnectedAction = (): BTDevicesActionType => ({
  type: BT_DEVICE_DISCONNECTED,
});

export const connectToBTDeviceAction = (
  macAddress: string,
): ThunkAction<
  void,
  StoreStateType,
  BTDevicesActionType,
  Action<string>
> => async dispatch => {
  dispatch({type: CONNECT_TO_BT_DEVICE});
  try {
    EscPos.setConfig({type: 'bluetooth'});
    await EscPos.connect(macAddress);
    dispatch(connectToBTDeviceSuccessAction(macAddress));
  } catch (error) {
    dispatch(connectToBTDeviceFailureAction(error.message));
  }
};
