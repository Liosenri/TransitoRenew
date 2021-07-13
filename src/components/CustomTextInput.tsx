import React, {RefObject, useState} from 'react';
import {
  View,
  TextInput,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from 'react-native';
import {MEDIUM_MARGIN_SIZE, PRIMARY_COLOR} from '@/constants';
import {scale} from '@/utils/ui';
import {CustomText} from '@/components';
import {ReturnKeyType} from 'react-native';

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
  textType?: 'regular' | 'bold' | 'light';
  textSize?: 'small' | 'medium' | 'large';
  reference?: RefObject<TextInput>;
  onSubmitEditing?: () => void;
  returnKeyType?: ReturnKeyType;
  blurOnSubmit?: boolean;
}

const CustomTextInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  style,
  textStyle,
  onBlur,
  multiline,
  secureTextEntry,
  textType = 'regular',
  textSize = 'medium',
  reference,
  onSubmitEditing,
  returnKeyType = 'done',
  blurOnSubmit = true,
}: Props) => {
  const [focused, setFocused] = useState(false);
  let customStyle = {...styles[textType], ...styles[textSize]};
  let focusedStyle = {borderColor: focused ? PRIMARY_COLOR : '#DDDDDD'};

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
      {label && <CustomText style={styles.label} text={label} />}
      <View style={[styles.textInputContainer, focusedStyle]}>
        <TextInput
          secureTextEntry={secureTextEntry}
          multiline={multiline}
          numberOfLines={multiline ? 2 : 1}
          style={[customStyle, styles.textInput, textStyle]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          onBlur={hanldeOnBlur}
          onFocus={handleOnFocus}
          ref={reference}
          onSubmitEditing={onSubmitEditing}
          returnKeyType={returnKeyType}
          blurOnSubmit={blurOnSubmit}
        />
      </View>
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  label: {
    marginBottom: MEDIUM_MARGIN_SIZE,
  },
  textInput: {
    padding: 8,

    borderRadius: 10,
    backgroundColor: 'white',
  },
  textInputContainer: {
    borderRadius: 10,
    borderWidth: 2,
  },
  regular: {
    fontFamily: 'NeoSansPro-Regular',
  },
  bold: {
    fontFamily: 'NeoSansPro-Bold',
  },
  light: {
    fontFamily: 'NeoSansPro-Light',
  },
  small: {
    fontSize: scale(12),
  },
  medium: {
    fontSize: scale(15),
  },
  large: {
    fontSize: scale(17),
  },
});
