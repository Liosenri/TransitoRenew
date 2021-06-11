import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Card} from '@/components';
import {MARGIN_SIZE, MEDIUM_MARGIN_SIZE} from '@/constants';
import {textSize} from '@/utils/styles';

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
      <Text style={styles.text}>{text}</Text>
    </Card>
  );
};

export default CraneDragDetails;

const styles = StyleSheet.create({
  text: {
    marginTop: MEDIUM_MARGIN_SIZE,
    fontSize: textSize.mini.fontSize,
    color: 'gray',
    fontStyle: 'italic',
  },
  container: {marginBottom: MARGIN_SIZE},
});
