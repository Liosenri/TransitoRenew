import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, DetailRow} from '@/components';
import {MARGIN_SIZE} from '@/constants';
import {DriverInfoType} from '@/constants/types';

interface Props {
  driverDetails: DriverInfoType;
}

const CarDetails = ({
  driverDetails: {
    address,
    lastName,
    licenseNumber,
    name,
    suburb,
    surName,
    town,
    zipCode,
  },
}: Props) => {
  return (
    <Card title="Ciudadano" style={styles.container}>
      <DetailRow title="Ciudadano" detail={`${name} ${lastName} ${surName}`} />
      <DetailRow title="No. licencia" detail={licenseNumber} />
      <DetailRow title="Dirección" detail={address} />
      <DetailRow title="Colonia" detail={suburb} />
      <DetailRow title="Municipio" detail={town} />
      <DetailRow title="CP" detail={zipCode} />
    </Card>
  );
};

export default CarDetails;

const styles = StyleSheet.create({
  container: {marginBottom: MARGIN_SIZE, flex: 1},
});
