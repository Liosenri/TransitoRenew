import React from 'react';
import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {BORDER_COLOR} from '@/constants';

interface Props {
  style?: StyleProp<ViewStyle>;
}

const Separator = ({style}: Props) => (
  <View style={[styles.container, style]} />
);

export default Separator;

const styles = StyleSheet.create({
  container: {
    height: 1,
    backgroundColor: BORDER_COLOR,
    width: '100%',
  },
});
