import React from 'react';
import {FlatList, StyleSheet, ListRenderItem} from 'react-native';
import {BTDeviceType} from '@/utils/Bluetooth';
import {Card, CustomText, ErrorScreen} from '@/components';
import {connectToBTDeviceAction} from '@/store/BTDevices/BTDevicesActions';
import {useDispatch} from 'react-redux';
import {MARGIN_SIZE, PRIMARY_COLOR} from '@/constants';

interface Props {
  devices: BTDeviceType[] | null;
  onEmptyScreenButton: () => void;
  connectedDeviceMacAddress: string | null;
}

const BTDevicesList = ({
  devices,
  onEmptyScreenButton,
  connectedDeviceMacAddress,
}: Props) => {
  const dispatch = useDispatch();

  const renderItem: ListRenderItem<BTDeviceType> = ({item}) => {
    const isSelected = connectedDeviceMacAddress === item.address;
    return (
      <Card
        style={isSelected ? styles.selected : undefined}
        title={item.name}
        onPress={() => dispatch(connectToBTDeviceAction(item.address))}>
        <CustomText text={`Dirección Mac ${item.address}`} />
      </Card>
    );
  };

  return (
    <FlatList
      contentContainerStyle={styles.flatlistContentContainer}
      renderItem={renderItem}
      data={devices}
      keyExtractor={item => item.address}
      ListEmptyComponent={() => (
        <ErrorScreen
          buttonTitle="Buscar de nuevo"
          error="No se encontraron dispositivos"
          buttonAction={onEmptyScreenButton}
        />
      )}
    />
  );
};

export default BTDevicesList;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F5F5F5'},
  flatlistContentContainer: {padding: MARGIN_SIZE},
  selected: {borderColor: PRIMARY_COLOR, borderWidth: 2},
});
