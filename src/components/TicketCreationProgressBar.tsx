import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import * as Progress from 'react-native-progress';
import {MARGIN_SIZE, PRIMARY_COLOR, MEDIUM_MARGIN_SIZE} from '@/constants';
import StaticInsets from 'react-native-static-safe-area-insets';
import {scale} from '@/utils/ui';
import {CustomText} from '@/components';

interface Props {
  titles: string[];
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
      <Progress.Pie progress={progress} size={scale(50)} color="white" />
      <View style={styles.stepsContainer}>
        <CustomText
          textSize="large"
          text={titles[step]}
          style={styles.currentStep}
        />
        <CustomText style={styles.nextStep} text={calculateNextStep()} />
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
  nextStep: {color: 'white'},
  currentStep: {
    textAlign: 'right',
    color: 'white',
  },
  stepsContainer: {alignItems: 'flex-end', flex: 1},
});
