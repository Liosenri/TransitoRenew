import React from 'react';
import {StyleSheet, View} from 'react-native';
import {InfractionType} from '@/constants/types';
import {MARGIN_SIZE} from '@/constants';
import {textSize} from '@/utils/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Card, CustomText} from '@/components';
import {useNavigation} from '@react-navigation/core';
import {InfractionScreenNavigationProp} from '@/navigation/types';

interface Props {
  infraction: InfractionType;
}

const InfractionItem = ({
  infraction: {folio, name, plates, dateTrafficTicket, isPayment},
}: Props) => {
  var date = new Date(dateTrafficTicket);
  const paymentStatusStyle = {backgroundColor: isPayment ? 'green' : 'red'};
  const {navigate} = useNavigation<InfractionScreenNavigationProp>();
  return (
    <Card
      title={`Folio ${folio}`}
      style={styles.container}
      onPress={() => navigate('InfractionDetails', {folio})}>
      <CustomText textSize="small" text={date.toLocaleString()} />
      <CustomText textSize="small" text={`${name} - ${plates}`} />
      <View style={[styles.paymentIndicator, paymentStatusStyle]}>
        <Icon name={isPayment ? 'check' : 'close'} color="white" size={15} />
      </View>
    </Card>
  );
};

export default InfractionItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: MARGIN_SIZE,
  },
  folio: {
    fontSize: textSize.small.fontSize,
    fontWeight: 'bold',
  },
  date: {color: 'gray'},
  paymentIndicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
    position: 'absolute',
    top: MARGIN_SIZE,
    right: MARGIN_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
