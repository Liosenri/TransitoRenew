import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Card, CustomText} from '@/components';

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
    <Card style={[style]}>
      <CustomText textType="bold" text={title} />
      <Picker selectedValue={selectedValue} onValueChange={onChangeValue}>
        {options.map(({value, label}) => (
          <Picker.Item key={value} label={label} value={value} />
        ))}
      </Picker>
    </Card>
  );
};

export default CustomPicker;
