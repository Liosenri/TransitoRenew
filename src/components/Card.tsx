import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Text,
} from 'react-native';
import {MARGIN_SIZE} from '@/constants';
import {textSize} from '@/utils/styles';

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
    {title && <Text style={styles.title}>{title}</Text>}
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
  title: {fontSize: textSize.small.fontSize, fontWeight: 'bold'},
});
