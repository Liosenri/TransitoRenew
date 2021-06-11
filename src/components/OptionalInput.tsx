import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Switch,
} from 'react-native';
import {textSize} from '@/utils/styles';
import { Card } from '@/components';

interface Props {
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}

const OptionalInput = ({title, containerStyle, enabled, onChange}: Props) => {
  return (
    <Card style={[styles.container, containerStyle]}>
      <Text style={styles.label}>{title}</Text>
      <Switch value={enabled} onValueChange={onChange} />
    </Card>
  );
};

export default OptionalInput;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  label: {
    fontSize: textSize.small.fontSize,
    fontWeight: 'bold',
  },
});
