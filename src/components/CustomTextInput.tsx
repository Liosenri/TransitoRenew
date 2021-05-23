import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
  Text,
} from 'react-native';
import {MEDIUM_MARGIN_SIZE, PRIMARY_COLOR} from '@/constants';
import {textSize} from '@/utils/styles';

interface Props {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
  onBlur?: () => void;
  multiline?: boolean;
  secureTextEntry?: boolean;
}

const CustomTextInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  style,
  textStyle,
  onBlur,
  labelStyle,
  multiline,
  secureTextEntry,
}: Props) => {
  const [focused, setFocused] = useState(false);

  const hanldeOnBlur = () => {
    if (onBlur) {
      onBlur();
    }
    setFocused(false);
  };

  const handleOnFocus = () => {
    setFocused(true);
  };

  return (
    <View style={style}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <View
        style={[
          styles.textInputContainer,
          {borderColor: focused ? PRIMARY_COLOR : '#DDDDDD'},
        ]}>
        <TextInput
          secureTextEntry={secureTextEntry}
          multiline={multiline}
          numberOfLines={multiline ? 2 : 1}
          style={[styles.textInput, textStyle]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          onBlur={hanldeOnBlur}
          onFocus={handleOnFocus}
        />
      </View>
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  label: {
    marginBottom: MEDIUM_MARGIN_SIZE,
    fontSize: textSize.small.fontSize,
    // fontWeight:'300'
  },
  textInput: {
    padding: 8,
    fontSize: textSize.small.fontSize,
    borderRadius: 10,
  },
  textInputContainer: {
    borderRadius: 10,
    borderWidth: 2,
  },
});
