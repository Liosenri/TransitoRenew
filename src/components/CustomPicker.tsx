import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {BORDER_COLOR, MEDIUM_MARGIN_SIZE} from '@/constants';
import {textSize} from '@/utils/styles';

interface Props {
  options: {value: string; label: string}[];
  style?: StyleProp<ViewStyle>;
  title: string;
  onChangeValue: (value: string) => void;
  selectedValue: string;
}

const CustomPicker = ({
  options,
  title,
  style,
  onChangeValue,
  selectedValue,
}: Props) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{title}</Text>
      <Picker selectedValue={selectedValue} onValueChange={onChangeValue}>
        {options.map(({value, label}) => (
          <Picker.Item key={value} label={label} value={value} />
        ))}
      </Picker>
    </View>
  );
};

export default CustomPicker;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 5,
    paddingVertical: MEDIUM_MARGIN_SIZE,
  },
  label: {
    fontSize: textSize.small.fontSize,
    fontWeight: 'bold',
  },
});
