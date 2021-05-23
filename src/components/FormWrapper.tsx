import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {NextBackButtonsView} from '@/components';
import {MARGIN_SIZE, MEDIUM_MARGIN_SIZE} from '../constants';

interface Props {
  onContinue?: () => void;
  onBack?: () => void;
  children: React.ReactNode;
}

const FormWrapper = ({onContinue, onBack, children}: Props) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {children}
      </ScrollView>
      <NextBackButtonsView onContinue={onContinue} onBack={onBack} />
    </View>
  );
};

export default FormWrapper;

const styles = StyleSheet.create({
  container: {flex: 1},
  scrollViewContainer: {
    paddingHorizontal: MARGIN_SIZE,
    paddingVertical: MEDIUM_MARGIN_SIZE,
  },
});
