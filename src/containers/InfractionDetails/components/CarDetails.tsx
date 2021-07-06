import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, DetailRow} from '@/components';
import {MARGIN_SIZE} from '@/constants';
import {CarInfoType, CarTypeUseOptions} from '@/constants/types';

interface Props {
  carDetails: CarInfoType;
}

const CarDetails = ({
  carDetails: {
    plates,
    brand,
    color,
    environmentalVerification,
    typeUse,
    insuranceCompany,
    insurancePolicyNumber,
    line,
    model,
    serialNumber,
    type,
  },
}: Props) => {
  const typeUseValue = CarTypeUseOptions.filter(
    t => t.value === typeUse.toLowerCase(),
  ).pop();

  return (
    <Card title="Vehículo" style={styles.container}>
      <DetailRow title="Placas" detail={plates} />
      <DetailRow title="Marca y modelo" detail={`${brand} ${model}`} />
      <DetailRow title="Color" detail={color} />
      <DetailRow title="No. de serie" detail={serialNumber} />
      <DetailRow title="Uso" detail={typeUseValue?.label} />
      <DetailRow title="Linea" detail={line} />
      <DetailRow title="Tipo" detail={type} />
      <DetailRow title="Compañia de seguros" detail={insuranceCompany} />
      <DetailRow title="Póliza No." detail={insurancePolicyNumber} />
      <DetailRow title="Verificación" detail={environmentalVerification} />
    </Card>
  );
};

export default CarDetails;

const styles = StyleSheet.create({
  container: {marginBottom: MARGIN_SIZE},
});
