import {BTDeviceType} from '~/src/utils/Bluetooth';

export interface BTDevicesReducerStateType {
  devices: BTDeviceType[] | null;
  scanning: boolean;
  scanningError: string | null;
  connecting: boolean;
  connectingError: string | null;
  connectedDeviceMacAddress: string | null;
}

export const SCAN_BT_DEVICES = 'SCAN_BT_DEVICES';
export const SCAN_BT_DEVICES_SUCCESS = 'SCAN_BT_DEVICES_SUCCESS';
export const SCAN_BT_DEVICES_FAILURE = 'SCAN_BT_DEVICES_FAILURE';
export const CONNECT_TO_BT_DEVICE = 'CONNECT_TO_BT_DEVICE';
export const CONNECT_TO_BT_DEVICE_SUCCESS = 'CONNECT_TO_BT_DEVICE_SUCCESS';
export const CONNECT_TO_BT_DEVICE_FAILURE = 'CONNECT_TO_BT_DEVICE_FAILURE';
export const BT_DEVICE_DISCONNECTED = 'BT_DEVICE_DISCONNECTED';

interface ScanBTDevicesActionType {
  type: typeof SCAN_BT_DEVICES;
}

interface ScanBTDevicesFailureActionType {
  type: typeof SCAN_BT_DEVICES_FAILURE;
  payload: string;
}

interface ScanBTDevicesSuccessActionType {
  type: typeof SCAN_BT_DEVICES_SUCCESS;
  payload: BTDeviceType[];
}

interface ConnectToBTDeviceActionType {
  type: typeof CONNECT_TO_BT_DEVICE;
}

interface ConnectToBTDeviceSuccessActionType {
  type: typeof CONNECT_TO_BT_DEVICE_SUCCESS;
  payload: string;
}

interface ConnectToBTDeviceFailureActionType {
  type: typeof CONNECT_TO_BT_DEVICE_FAILURE;
  payload: string;
}

interface BTDeviceDisconnected {
  type: typeof BT_DEVICE_DISCONNECTED;
}

export type BTDevicesActionType =
  | ScanBTDevicesActionType
  | ScanBTDevicesFailureActionType
  | ScanBTDevicesSuccessActionType
  | ConnectToBTDeviceActionType
  | ConnectToBTDeviceSuccessActionType
  | ConnectToBTDeviceFailureActionType
  | BTDeviceDisconnected;
