import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, CustomText} from '@/components';
import {StoreStateType} from '@/store';
import {useSelector} from 'react-redux';
import {MARGIN_SIZE, MEDIUM_MARGIN_SIZE} from '@/constants';
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
        <CustomText
          style={styles.text}
          text={`Oficial ${credentials.name}`}
          textSize="small"
        />
      )}
      <CustomText style={styles.text} text={description} textSize="small" />
      <CustomText
        style={styles.text}
        text={`Obervaciones del oficial de tránsito: ${
          observations ? observations : 'Sin obsevarciones'
        }`}
        textSize="small"
      />
      <CustomText
        style={styles.text}
        text={`Obervaciones del ciudadano: ${
          citicenObservations ? citicenObservations : 'Sin observaciones'
        }`}
        textSize="small"
      />
    </Card>
  );
};

export default GeneralDetails;

const styles = StyleSheet.create({
  text: {
    marginTop: MEDIUM_MARGIN_SIZE,
    color: 'gray',
  },
  container: {marginBottom: MARGIN_SIZE},
});
