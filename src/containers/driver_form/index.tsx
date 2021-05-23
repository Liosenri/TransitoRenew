import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {DriverFormType} from '@/constants/types';
import {DriverFormFields} from '@/constants/forms';
import {generateFormInput, validateFormRequiredValues} from '@/utils/forms';
import {CustomButton, OptionalInput} from '@/components';
import _ from 'lodash';

import styles from './styles';

interface Props {
  onContinue: () => void;
}

export default ({onContinue}: Props) => {
  const [formState, setFormState] = useState<DriverFormType>({
    address: '',
    lastName: '',
    licenseNumber: '',
    name: '',
    suburb: '',
    surName: '',
    town: '',
    zipCode: '',
    place: '',
  });

  const [isValidated, setIsValidated] = useState(false);

  const onInputChangeText = (
    text: string,
    propertyName: keyof DriverFormType,
  ): void =>
    setFormState({
      ...formState,
      [propertyName]: text,
    });

  const validateForm = () => {
    const invalidFields = validateFormRequiredValues(
      _.toArray(DriverFormFields),
      formState,
    );
    setIsValidated(invalidFields.length ? false : true);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <OptionalInput
          style={styles.licenseNumberContainer}
          title="¿Cuenta con licencia?">
          {generateFormInput<keyof DriverFormType>(
            [DriverFormFields.licenseNumber],
            formState,
            onInputChangeText,
            validateForm,
          )}
        </OptionalInput>
        {generateFormInput<keyof DriverFormType>(
          [
            DriverFormFields.lastName,
            DriverFormFields.surName,
            DriverFormFields.name,
            DriverFormFields.address,
            DriverFormFields.zipCode,
            DriverFormFields.suburb,
            DriverFormFields.town,
            DriverFormFields.place,
          ],
          formState,
          onInputChangeText,
          validateForm,
          {marginVertical: 8},
        )}
        <CustomButton
          title="Continuar"
          onPress={() => {
            onContinue();
          }}
          disabled={!isValidated}
        />
      </ScrollView>
    </View>
  );
};
