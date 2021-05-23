import React, {useState} from 'react';
import {StyleSheet, View, LayoutAnimation} from 'react-native';
import {
  CarForm,
  DriverForm,
  WarrantyObservationsForm,
  InfractionLocationForm,
  TrafficRegulations,
} from '@/containers';
import {TicketCreationProgressBar} from '@/components';

interface Props {}

const CreateInfraction = ({}: Props) => {
  const [setpCounter, setSetpCounter] = useState(0);
  const titles = [
    'Ciudadano',
    'Vehículo',
    'Observaciones',
    'Ubicación',
    'Articulos',
  ];

  const incrementStepCounter = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSetpCounter(setpCounter + 1);
  };

  const decrementStepCounter = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSetpCounter(setpCounter - 1);
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
