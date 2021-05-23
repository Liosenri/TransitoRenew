import React from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import {PRIMARY_COLOR, MEDIUM_MARGIN_SIZE} from '@/constants';
import {textSize} from '@/utils/styles';

interface Props {
  onPress?: () => void;
  title: string;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
}

const index = ({onPress, title, style, titleStyle, disabled}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style, disabled ? styles.disabled : undefined]}
      disabled={disabled}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: MEDIUM_MARGIN_SIZE,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: textSize.small.fontSize,
  },
  disabled: {backgroundColor: 'gray'},
});
