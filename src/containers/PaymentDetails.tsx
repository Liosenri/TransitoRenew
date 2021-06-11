import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Card, DetailRow} from '@/components';
import {MARGIN_SIZE} from '@/constants';
import {textSize} from '@/utils/styles';
import {CeroFilasResponseMultaType} from '@/constants/types';

interface Props {
  paymentInfo: CeroFilasResponseMultaType;
}

const PaymentDetails = ({
  paymentInfo: {subtotal, descuento, total, labelDescuento},
}: Props) => {
  return (
    <Card style={styles.container} title="Detalles del pago">
      <DetailRow title="Subtotal" detail={subtotal} />
      <DetailRow title="Descuento" detail={descuento} />
      <DetailRow title="Total" detail={total} />
      <Text style={styles.discount}>{labelDescuento}</Text>
    </Card>
  );
};

export default PaymentDetails;

const styles = StyleSheet.create({
  container: {marginBottom: MARGIN_SIZE},
  discount: {
    textAlign: 'right',
    color: 'gray',
    fontStyle: 'italic',
    fontSize: textSize.mini.fontSize,
  },
});
