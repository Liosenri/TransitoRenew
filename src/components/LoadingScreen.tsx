import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {MARGIN_SIZE, PRIMARY_COLOR} from '@/constants';
import {textSize} from '@/utils/styles';

interface Props {
  message: string;
}

const LoadingScreeen = ({message}: Props) => (
  <View style={styles.container}>
    <Text style={styles.message}>{message}</Text>
    <ActivityIndicator animating={true} color={PRIMARY_COLOR} size="large" />
  </View>
);

export default LoadingScreeen;

const styles = StyleSheet.create({
  message: {
    color: 'gray',
    margin: MARGIN_SIZE,
    fontWeight: 'bold',
    fontSize: textSize.large.fontSize,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
