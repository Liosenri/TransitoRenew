import React from 'react';
import {TouchableOpacity, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {MARGIN_SIZE} from '@/constants';
import {CustomText} from '@/components';

interface Props {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  title?: string;
}

const Card = ({children, style, onPress, title}: Props) => (
  <TouchableOpacity
    disabled={!onPress ? true : false}
    onPress={onPress}
    style={[styles.container, style]}>
    {title && <CustomText text={title} textType="bold" />}
    {children}
  </TouchableOpacity>
);

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: MARGIN_SIZE,
  },
});
