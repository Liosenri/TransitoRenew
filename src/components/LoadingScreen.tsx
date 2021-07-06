import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {MARGIN_SIZE, PRIMARY_COLOR} from '@/constants';
import CustomText from './CustomText';

interface Props {
  message: string;
}

const LoadingScreeen = ({message}: Props) => (
  <View style={styles.container}>
    <CustomText
      textType="bold"
      textSize="large"
      style={styles.message}
      text={message}
    />
    <ActivityIndicator animating={true} color={PRIMARY_COLOR} size="large" />
  </View>
);

export default LoadingScreeen;

const styles = StyleSheet.create({
  message: {
    color: 'gray',
    margin: MARGIN_SIZE,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
