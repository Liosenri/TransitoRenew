import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, CustomText, DetailRow} from '@/components';
import {MARGIN_SIZE} from '@/constants';
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
      <CustomText
        textSize="small"
        style={styles.discount}
        text={labelDescuento}
      />
    </Card>
  );
};

export default PaymentDetails;

const styles = StyleSheet.create({
  container: {marginBottom: MARGIN_SIZE},
  discount: {
    textAlign: 'right',
    color: 'gray',
  },
});
