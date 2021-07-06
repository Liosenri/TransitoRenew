import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, CustomText} from '@/components';
import {MARGIN_SIZE, MEDIUM_MARGIN_SIZE} from '@/constants';

interface Props {
  craneDrag: boolean;
  company: string;
  stockNumber: string | null;
}

const CraneDragDetails = ({company, craneDrag, stockNumber}: Props) => {
  const text = craneDrag
    ? `Arrastre con compañia ${company} y No. de inventario ${
        stockNumber ? stockNumber : 0
      }`
    : 'Sin Arrastre';
  return (
    <Card style={styles.container} title="Arrastre">
      <CustomText textSize="small" style={styles.text} text={text} />
    </Card>
  );
};

export default CraneDragDetails;

const styles = StyleSheet.create({
  text: {
    marginTop: MEDIUM_MARGIN_SIZE,
    color: 'gray',
  },
  container: {marginBottom: MARGIN_SIZE},
});
