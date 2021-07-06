import React from 'react';
import {StyleProp, TouchableOpacity, ViewStyle, StyleSheet} from 'react-native';
import {PRIMARY_COLOR, MEDIUM_MARGIN_SIZE} from '@/constants';

import CustomText from './CustomText';

interface Props {
  onPress?: () => void;
  title: string;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  textColor?: string;
}

const index = ({
  onPress,
  title,
  style,
  disabled,
  textColor = 'white',
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style, disabled ? styles.disabled : undefined]}
      disabled={disabled}>
      <CustomText style={{color: textColor}} text={title} textType="bold" />
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
  disabled: {backgroundColor: 'gray'},
});
