import React, {useState} from 'react';
import {StyleSheet, View, LayoutAnimation} from 'react-native';
import {
  CarForm,
  DriverForm,
  WarrantyObservationsForm,
  InfractionLocationForm,
  TrafficRegulations,
  SignInfraction,
} from '@/containers';
import {TicketCreationProgressBar} from '@/components';
import {CreateInfractionNavigationProp} from '@/navigation/types';
import {useNavigation} from '@react-navigation/native';
import {createErrorAlert} from '@/utils/Alerts';
import {StoreStateType} from '@/store';
import {useDispatch, useSelector} from 'react-redux';
import {resetFormAction} from '@/store/InfractionForm/InfractionFormActions';
import {fetchUserInfractionsAction} from '@/store/Infractions/InfractionsActions';

interface Props {}

const CreateInfraction = ({}: Props) => {
  const [setpCounter, setSetpCounter] = useState(0);
  const titles = [
    'Ciudadano',
    'Vehículo',
    'Observaciones',
    'Ubicación',
    'Articulos',
    'Firma del ciudadano',
  ];

  const navigation = useNavigation<CreateInfractionNavigationProp>();
  const dispatch = useDispatch();

  const {createdInfractionFolio} = useSelector(
    ({InfractionsReducer}: StoreStateType) => InfractionsReducer,
  );

  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', e => {
        if (createdInfractionFolio) {
          return;
        }
        createErrorAlert(
          'Error',
          'No es posible abandonar la creación de una multa',
        );
        e.preventDefault();
      }),
    [navigation, createdInfractionFolio],
  );

  const incrementStepCounter = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSetpCounter(setpCounter + 1);
  };

  const decrementStepCounter = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSetpCounter(setpCounter - 1);
  };

  const finishInfractionCreationFlow = (folio: string) => {
    navigation.goBack();
    navigation.navigate('InfractionDetails', {
      folio,
    });
    dispatch(resetFormAction());
    dispatch(fetchUserInfractionsAction());
  };

  const renderScene = () => {
    switch (setpCounter) {
      case 0:
        return <DriverForm onContinue={incrementStepCounter} />;
      case 1:
        return (
          <CarForm
            onContinue={incrementStepCounter}
            onBack={decrementStepCounter}
          />
        );
      case 2:
        return (
          <WarrantyObservationsForm
            onContinue={incrementStepCounter}
            onBack={decrementStepCounter}
          />
        );
      case 3:
        return (
          <InfractionLocationForm
            onContinue={incrementStepCounter}
            onBack={decrementStepCounter}
          />
        );
      case 4:
        return (
          <TrafficRegulations
            onContinue={incrementStepCounter}
            onBack={decrementStepCounter}
          />
        );
      case 5:
        return (
          <SignInfraction
            onContinue={finishInfractionCreationFlow}
            onBack={decrementStepCounter}
          />
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <TicketCreationProgressBar
        titles={titles}
        step={setpCounter}
        progress={setpCounter / titles.length}
      />
      {renderScene()}
    </View>
  );
};

export default CreateInfraction;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
});
