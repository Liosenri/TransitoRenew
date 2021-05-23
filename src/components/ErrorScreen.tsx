import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {textSize} from '@/utils/styles';
import {CustomButton} from '@/components';
import {MARGIN_SIZE} from '@/constants';

interface Props {
  error: string | number;
  buttonAction: () => void;
  buttonTitle: string;
}

const ErrorScreen = ({error, buttonAction, buttonTitle}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{error}</Text>
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
    fontWeight: 'bold',
    fontSize: textSize.large.fontSize,
  },
  button: {padding: 16},
});
