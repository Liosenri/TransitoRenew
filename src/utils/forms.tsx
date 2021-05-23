import React from 'react';
import {FormFieldType} from '@/constants/types';
import {CustomTextInput} from '@/components';
import {StyleProp, TextStyle} from 'react-native';

export function generateFormInput<T>(
  fields: FormFieldType<T>[],
  formStateObject: any,
  onInputChangeText: (text: string, propertyName: T) => void,
  customStyle?: StyleProp<TextStyle>,
) {
  return fields.map(({label, propertyName, multiline}, index) => (
    <CustomTextInput
      multiline={multiline}
      key={`${propertyName}-${index}`}
      label={label}
      value={formStateObject[propertyName]}
      onChangeText={text => onInputChangeText(text, propertyName)}
      placeholder={label}
      style={customStyle}
    />
  ));
}

export function validateFormRequiredValues<T>(
  fields: FormFieldType<T>[],
  compareObject: any,
) {
  return fields
    .map(field => {
      if (!compareObject[field.propertyName].length && field.required) {
        return field.label;
      }
    })
    .filter(Boolean);
}
