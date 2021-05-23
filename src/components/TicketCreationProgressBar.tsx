import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import * as Progress from 'react-native-progress';
import {MARGIN_SIZE, PRIMARY_COLOR, MEDIUM_MARGIN_SIZE} from '@/constants';
import {textSize} from '@/utils/styles';
import StaticInsets from 'react-native-static-safe-area-insets';
import {normalize} from '@/utils/ui';

interface Props {
  titles: String[];
  step: number;
  progress: number;
}

const TicketCreationProgressBar = ({
  titles = [],
  step = 0,
  progress = 0,
}: Props) => {
  const calculateNextStep = () => {
    const nextStep = titles[step + 1];
    return nextStep
      ? `Siguiente: ${nextStep}`
      : 'Creación del ticket finalizada';
  };

  return (
    <View style={styles.container}>
      <Progress.Pie progress={progress} size={normalize(60)} color="white" />
      <View style={styles.stepsContainer}>
        <Text style={styles.currentStep}>{titles[step]}</Text>
        <Text style={styles.nextStep}>{calculateNextStep()}</Text>
      </View>
    </View>
  );
};

export default TicketCreationProgressBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_COLOR,
    paddingHorizontal: MARGIN_SIZE,
    paddingTop:
      MEDIUM_MARGIN_SIZE +
      (Platform.OS === 'ios' ? StaticInsets.safeAreaInsetsTop : 0),
    paddingBottom: MEDIUM_MARGIN_SIZE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nextStep: {fontSize: textSize.small.fontSize, color: 'white'},
  currentStep: {
    fontWeight: 'bold',
    fontSize: textSize.xlarge.fontSize,
    textAlign: 'right',
    color: 'white',
  },
  stepsContainer: {alignItems: 'flex-end', flex: 1},
});
