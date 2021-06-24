import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Card} from '@/components';
import {StoreStateType} from '@/store';
import {useSelector} from 'react-redux';
import {MARGIN_SIZE, MEDIUM_MARGIN_SIZE} from '@/constants';
import {textSize} from '@/utils/styles';
import {WarrantyOptions} from '@/constants/types';

interface Props {
  level: string;
  warranty: number;
  observations: string;
  aggravating: boolean;
  citicenObservations: string;
}

const GeneralDetails = ({
  level,
  warranty,
  observations,
  aggravating,
  citicenObservations,
}: Props) => {
  const {credentials} = useSelector(
    ({AuthReducer}: StoreStateType) => AuthReducer,
  );
  const warrantyDescription = WarrantyOptions.filter(
    w => w.value === warranty.toString(),
  ).pop()?.label;

  const description = `Infracción nivel ${!level ? 'sin nivel' : level} ${
    aggravating ? 'con' : 'sin'
  } agravante, el conductor dejo como garantia su ${warrantyDescription}`;

  return (
    <Card title="General" style={styles.container}>
      {credentials && (
        <Text style={styles.text}>Oficial {credentials.name}</Text>
      )}
      <Text style={styles.text}>{description}</Text>

      <Text style={styles.text}>
        Obervaciones del oficial de tránsito:{' '}
        {observations ? observations : 'Sin obsevarciones'}
      </Text>

      <Text style={styles.text}>
        Obervaciones del ciudadano:{' '}
        {citicenObservations ? citicenObservations : 'Sin observaciones'}
      </Text>
    </Card>
  );
};

export default GeneralDetails;

const styles = StyleSheet.create({
  text: {
    marginTop: MEDIUM_MARGIN_SIZE,
    fontSize: textSize.mini.fontSize,
    color: 'gray',
    fontStyle: 'italic',
  },
  container: {marginBottom: MARGIN_SIZE},
});
