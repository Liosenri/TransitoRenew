import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CustomButton} from '@/components';
import {MARGIN_SIZE} from '@/constants';
import CustomText from './CustomText';

interface Props {
  error: string | number;
  buttonAction: () => void;
  buttonTitle: string;
}

const ErrorScreen = ({error, buttonAction, buttonTitle}: Props) => {
  return (
    <View style={styles.container}>
      <CustomText
        textSize="large"
        textType="bold"
        style={styles.message}
        text={error}
      />
      <CustomButton
        style={styles.button}
        title={buttonTitle}
        onPress={buttonAction}
      />
    </View>
  );
};

export default ErrorScreen;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  message: {
    color: 'gray',
    margin: MARGIN_SIZE,
  },
  button: {padding: 8},
});
