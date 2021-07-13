import React, {RefObject, useEffect, useRef, useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {DriverFormType} from '@/constants/types';
import {DriverFormFields} from '@/constants/forms';
import {validateFormRequiredValues} from '@/utils/forms';
import {CustomTextInput, ExpandableView, FormWrapper} from '@/components';
import _ from 'lodash';
import {useDispatch, useSelector} from 'react-redux';
import {StoreStateType} from '@/store';
import {setDriverFormAction} from '@/store/InfractionForm/InfractionFormActions';
import {createInvalidFormAlert} from '@/utils/Alerts';
import {MEDIUM_MARGIN_SIZE} from '@/constants';

interface Props {
  onContinue: () => void;
}

const DriverForm = ({onContinue}: Props) => {
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
    hasLicense: false,
  });

  const addressRef: RefObject<TextInput> = useRef(null);
  const lastNameRef: RefObject<TextInput> = useRef(null);
  const licenseNumberRef: RefObject<TextInput> = useRef(null);
  const nameRef: RefObject<TextInput> = useRef(null);
  const suburbRef: RefObject<TextInput> = useRef(null);
  const surNameRef: RefObject<TextInput> = useRef(null);
  const townRef: RefObject<TextInput> = useRef(null);
  const zipCodeRef: RefObject<TextInput> = useRef(null);
  const placeRef: RefObject<TextInput> = useRef(null);

  const storeForm = useSelector(
    (state: StoreStateType) => state.InfractionFormReducer.driverForm,
  );

  useEffect(() => {
    if (storeForm) {
      setFormState(storeForm);
    }
  }, [storeForm]);

  const dispatch = useDispatch();

  const handleOnTextInputChange = (text: string, propName: string) =>
    setFormState({...formState, [propName]: text});

  const handleOnContinueButtonPress = () => {
    const invalidFields = validateFormRequiredValues(
      _.toArray(DriverFormFields),
      formState,
    );

    if (!invalidFields.length) {
      dispatch(setDriverFormAction(formState));
      onContinue();
    } else {
      createInvalidFormAlert(invalidFields);
    }
  };

  return (
    <FormWrapper onContinue={handleOnContinueButtonPress}>
      <ExpandableView
        expanded={formState.hasLicense}
        style={styles.verticalSpace}
        title={DriverFormFields.hasLicense.label}
        onExpand={hasLicense => setFormState({...formState, hasLicense})}>
        <CustomTextInput
          label={DriverFormFields.licenseNumber.label}
          value={formState.licenseNumber}
          onChangeText={text => handleOnTextInputChange(text, 'licenseNumber')}
          placeholder={DriverFormFields.licenseNumber.label}
          style={styles.verticalSpace}
          reference={licenseNumberRef}
          onSubmitEditing={() => lastNameRef.current?.focus()}
          blurOnSubmit={false}
          returnKeyType="next"
        />
      </ExpandableView>
      <CustomTextInput
        label={DriverFormFields.lastName.label}
        value={formState.lastName}
        onChangeText={text => handleOnTextInputChange(text, 'lastName')}
        placeholder={DriverFormFields.lastName.label}
        style={styles.verticalSpace}
        reference={lastNameRef}
        onSubmitEditing={() => surNameRef.current?.focus()}
        blurOnSubmit={false}
        returnKeyType="next"
      />
      <CustomTextInput
        label={DriverFormFields.surName.label}
        value={formState.surName}
        onChangeText={text => handleOnTextInputChange(text, 'surName')}
        placeholder={DriverFormFields.surName.label}
        style={styles.verticalSpace}
        reference={surNameRef}
        onSubmitEditing={() => nameRef.current?.focus()}
        blurOnSubmit={false}
        returnKeyType="next"
      />
      <CustomTextInput
        label={DriverFormFields.name.label}
        value={formState.name}
        onChangeText={text => handleOnTextInputChange(text, 'name')}
        placeholder={DriverFormFields.name.label}
        style={styles.verticalSpace}
        reference={nameRef}
        onSubmitEditing={() => addressRef.current?.focus()}
        blurOnSubmit={false}
        returnKeyType="next"
      />
      <CustomTextInput
        label={DriverFormFields.address.label}
        value={formState.address}
        onChangeText={text => handleOnTextInputChange(text, 'address')}
        placeholder={DriverFormFields.address.label}
        style={styles.verticalSpace}
        reference={addressRef}
        onSubmitEditing={() => zipCodeRef.current?.focus()}
        blurOnSubmit={false}
        returnKeyType="next"
      />
      <CustomTextInput
        label={DriverFormFields.zipCode.label}
        value={formState.zipCode}
        onChangeText={text => handleOnTextInputChange(text, 'zipCode')}
        placeholder={DriverFormFields.zipCode.label}
        style={styles.verticalSpace}
        reference={zipCodeRef}
        onSubmitEditing={() => suburbRef.current?.focus()}
        blurOnSubmit={false}
        returnKeyType="next"
      />
      <CustomTextInput
        label={DriverFormFields.suburb.label}
        value={formState.suburb}
        onChangeText={text => handleOnTextInputChange(text, 'suburb')}
        placeholder={DriverFormFields.suburb.label}
        style={styles.verticalSpace}
        reference={suburbRef}
        onSubmitEditing={() => townRef.current?.focus()}
        blurOnSubmit={false}
        returnKeyType="next"
      />
      <CustomTextInput
        label={DriverFormFields.town.label}
        value={formState.town}
        onChangeText={text => handleOnTextInputChange(text, 'town')}
        placeholder={DriverFormFields.town.label}
        style={styles.verticalSpace}
        reference={townRef}
        onSubmitEditing={() => placeRef.current?.focus()}
        blurOnSubmit={false}
        returnKeyType="next"
      />
      <CustomTextInput
        label={DriverFormFields.place.label}
        value={formState.place}
        onChangeText={text => handleOnTextInputChange(text, 'place')}
        placeholder={DriverFormFields.place.label}
        style={styles.verticalSpace}
        reference={placeRef}
      />
    </FormWrapper>
  );
};

export default DriverForm;

const styles = StyleSheet.create({
  container: {flex: 1},
  verticalSpace: {marginBottom: MEDIUM_MARGIN_SIZE},
});
