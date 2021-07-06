import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, CustomText} from '@/components';
import {MARGIN_SIZE, MEDIUM_MARGIN_SIZE} from '@/constants';

interface Props {
  address: string;
  date: string;
}

const LocationDetails = ({date, address}: Props) => {
  const d = new Date(date);
  const description = `Infraccion realizada en ${address} con fecha ${d.toLocaleString()}`;
  return (
    <Card title="Lugar y hora" style={styles.container}>
      <CustomText textSize="small" style={styles.text} text={description} />
    </Card>
  );
};

export default LocationDetails;

const styles = StyleSheet.create({
  text: {
    marginTop: MEDIUM_MARGIN_SIZE,
    color: 'gray',
  },
  container: {marginBottom: MARGIN_SIZE},
});
