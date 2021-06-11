// @ts-ignore
import {BluetoothManager} from 'react-native-bluetooth-escpos-printer';

export interface BTDeviceType {
  name: string;
  address: string;
}

interface ScanDevicesResponseType {
  found: [BTDeviceType];
  paired: [BTDeviceType];
}

const isBluetoothEnabled = () =>
  new Promise<void>((resolve, reject) => {
    BluetoothManager.isBluetoothEnabled().then(
      (enabled: boolean) => {
        enabled ? resolve() : reject();
      },
      () => {
        reject();
      },
    );
  });

const scanBTDevices = () =>
  new Promise<ScanDevicesResponseType>((resolve, reject) => {
    BluetoothManager.scanDevices()
      .then((response: string) => {
        const devices = JSON.parse(response) as ScanDevicesResponseType;
        resolve(devices);
      })
      .catch(reject);
  });

export default {isBluetoothEnabled, scanBTDevices};
