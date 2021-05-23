import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {CustomButton} from '@/components';
import {
  BORDER_COLOR,
  MARGIN_SIZE,
  PRIMARY_COLOR,
  MEDIUM_MARGIN_SIZE,
} from '@/constants';
import StaticInsets from 'react-native-static-safe-area-insets';

interface Props {
  onContinue?: () => void;
  onBack?: () => void;
}

const NextBackButtonsView = ({onContinue, onBack}: Props) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <CustomButton
          style={styles.backButtonStyle}
          titleStyle={styles.backButtonStyleTitleStyle}
          title="Regresar"
          onPress={onBack}
        />
      )}
      {onContinue && (
        <CustomButton
          style={styles.continueButtonStyle}
          title="Continuar"
          onPress={onContinue}
        />
      )}
    </View>
  );
};

export default NextBackButtonsView;

const styles = StyleSheet.create({
  container: {
    marginBottom: Platform.OS === 'ios' ? StaticInsets.safeAreaInsetsBottom : 0,
    paddingHorizontal: MARGIN_SIZE,
    paddingVertical: MEDIUM_MARGIN_SIZE,
    flexDirection: 'row',
    borderTopColor: BORDER_COLOR,
    borderTopWidth: 2,
  },
  backButtonStyleTitleStyle: {color: PRIMARY_COLOR},
  backButtonStyle: {
    flex: 1,
    marginRight: MARGIN_SIZE,
    backgroundColor: 'white',
    borderColor: PRIMARY_COLOR,
    borderWidth: 2,
  },
  continueButtonStyle: {flex: 1},
});
