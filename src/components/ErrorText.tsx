import React from 'react';
import {Text, StyleSheet, StyleProp, TextStyle} from 'react-native';
import {textSize} from '@/utils/styles';

interface Props {
  text: string;
  style: StyleProp<TextStyle>;
}

const ErrorText = ({text, style}: Props) => (
  <Text style={[styles.text, style]}>{text}</Text>
);

export default ErrorText;

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: textSize.small.fontSize,
    textAlign: 'center',
  },
});
