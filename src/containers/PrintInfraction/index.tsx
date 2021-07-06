import React, {useEffect} from 'react';
import {View, StyleSheet, ToastAndroid} from 'react-native';
import {ErrorScreen, LoadingScreen, NextBackButtonsView} from '@/components';
import BTDevicesList from './components/BTDevicesList';
import {StoreStateType} from '@/store';
import {useDispatch, useSelector} from 'react-redux';
import {scanBTDevicesAction} from '@/store/BTDevices/BTDevicesActions';

import {
  PrintInfractionNavigationProp,
  PrintInfractionRouteProp,
} from '@/navigation/types';
import {printAction} from '@/store/Printer/PrinterActions';

type Props = {
  route: PrintInfractionRouteProp;
  navigation: PrintInfractionNavigationProp;
};

const PrintInfraction = ({
  route: {
    params: {infractionDetails},
  },
}: Props) => {
  const {
    scanning,
    devices,
    scanningError,
    connectingError,
    connectedDeviceMacAddress,
  } = useSelector(({BTDevicesReducer}: StoreStateType) => BTDevicesReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!devices) {
      dispatch(scanBTDevicesAction());
    }
  }, [devices, dispatch]);

  useEffect(() => {
    if (connectingError) {
      ToastAndroid.showWithGravity(
        'Error al conectarse al dispositivo',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    }
  }, [connectingError]);

  if (scanningError) {
    return (
      <ErrorScreen
        buttonTitle="Reintentar"
        error={scanningError}
        buttonAction={() => dispatch(scanBTDevicesAction())}
      />
    );
  }

  if (scanning) {
    return <LoadingScreen message="Escaneando dispositivos" />;
  }

  return (
    <View style={styles.container}>
      <BTDevicesList
        onEmptyScreenButton={() => dispatch(scanBTDevicesAction())}
        devices={devices}
        connectedDeviceMacAddress={connectedDeviceMacAddress}
      />
      <NextBackButtonsView
        nextButtonTitle="Imprimir"
        onContinue={() => dispatch(printAction(infractionDetails))}
        nextButtonDisabled={!connectedDeviceMacAddress}
      />
    </View>
  );
};

export default PrintInfraction;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F5F5F5'},
});
