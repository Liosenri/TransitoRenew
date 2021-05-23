import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Card} from '@/components';
import {MARGIN_SIZE, MEDIUM_MARGIN_SIZE} from '@/constants';
import {textSize} from '@/utils/styles';

interface Props {
  address: string;
  date: string;
}

const LocationDetails = ({date, address}: Props) => {
  const d = new Date(date);
  const description = `Infraccion realizada en ${address} con fecha ${d.toLocaleString()}`;
  return (
    <Card title="Lugar y hora" style={styles.container}>
      <Text style={styles.text}>{description}</Text>
    </Card>
  );
};

export default LocationDetails;

const styles = StyleSheet.create({
  text: {
    marginTop: MEDIUM_MARGIN_SIZE,
    fontSize: textSize.xmini.fontSize,
    color: 'gray',
    fontStyle: 'italic',
  },
  container: {marginBottom: MARGIN_SIZE},
});
