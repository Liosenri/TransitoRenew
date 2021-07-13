import React, {RefObject, useEffect, useRef, useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {
  ExpandableView,
  FormWrapper,
  CustomPicker,
  CustomTextInput,
} from '@/components';
import {CarFormType, CarTypeUseOptions} from '@/constants/types';
import {CarFormFields} from '@/constants/forms';
import {generateFormInput, validateFormRequiredValues} from '@/utils/forms';
import {useDispatch, useSelector} from 'react-redux';
import {StoreStateType} from '@/store';
import {createInvalidFormAlert} from '@/utils/Alerts';
import {setCarFormAction} from '@/store/InfractionForm/InfractionFormActions';
import _ from 'lodash';
import {MEDIUM_MARGIN_SIZE} from '@/constants';

interface Props {
  onContinue: () => void;
  onBack: () => void;
}

const DriverForm = ({onContinue, onBack}: Props) => {
  const [formState, setFormState] = useState<CarFormType>({
    brand: '',
    color: '',
    environmentalVerification: '',
    insuranceCompany: '',
    insurancePolicyNumber: '',
    line: '',
    model: '',
    plates: '',
    serialNumber: '',
    type: '',
    typeUse: 'particular',
    craneDrag: false,
    craneDragCompany: '',
    stockNumber: '',
    hasInsuranceCompany: false,
    hastEnvironmentalVerification: false,
  });

  const brandRef: RefObject<TextInput> = useRef(null);
  const colorNameRef: RefObject<TextInput> = useRef(null);
  const lineNumberRef: RefObject<TextInput> = useRef(null);
  const modelRef: RefObject<TextInput> = useRef(null);
  const platesRef: RefObject<TextInput> = useRef(null);
  const serialNumberRef: RefObject<TextInput> = useRef(null);
  const typeRef: RefObject<TextInput> = useRef(null);
  const insuranceCompanyRef: RefObject<TextInput> = useRef(null);
  const craneDragCompanyRef: RefObject<TextInput> = useRef(null);

  const storeForm = useSelector(
    (state: StoreStateType) => state.InfractionFormReducer.carForm,
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
      _.toArray(CarFormFields),
      formState,
    );

    if (!invalidFields.length) {
      dispatch(setCarFormAction(formState));
      onContinue();
    } else {
      createInvalidFormAlert(invalidFields);
    }
  };

  return (
    <FormWrapper onBack={onBack} onContinue={handleOnContinueButtonPress}>
      <CustomTextInput
        label={CarFormFields.plates.label}
        value={formState.plates}
        onChangeText={text => handleOnTextInputChange(text, 'plates')}
        placeholder={CarFormFields.plates.label}
        style={styles.verticalSpacing}
        reference={platesRef}
        onSubmitEditing={() => brandRef.current?.focus()}
        blurOnSubmit={false}
        returnKeyType="next"
      />
      <CustomTextInput
        label={CarFormFields.brand.label}
        value={formState.brand}
        onChangeText={text => handleOnTextInputChange(text, 'brand')}
        placeholder={CarFormFields.brand.label}
        style={styles.verticalSpacing}
        reference={brandRef}
        onSubmitEditing={() => modelRef.current?.focus()}
        blurOnSubmit={false}
        returnKeyType="next"
      />
      <CustomTextInput
        label={CarFormFields.model.label}
        value={formState.model}
        onChangeText={text => handleOnTextInputChange(text, 'model')}
        placeholder={CarFormFields.model.label}
        style={styles.verticalSpacing}
        reference={modelRef}
        onSubmitEditing={() => typeRef.current?.focus()}
        blurOnSubmit={false}
        returnKeyType="next"
      />
      <CustomTextInput
        label={CarFormFields.type.label}
        value={formState.type}
        onChangeText={text => handleOnTextInputChange(text, 'type')}
        placeholder={CarFormFields.type.label}
        style={styles.verticalSpacing}
        reference={typeRef}
        onSubmitEditing={() => lineNumberRef.current?.focus()}
        blurOnSubmit={false}
        returnKeyType="next"
      />
      <CustomTextInput
        label={CarFormFields.line.label}
        value={formState.line}
        onChangeText={text => handleOnTextInputChange(text, 'line')}
        placeholder={CarFormFields.line.label}
        style={styles.verticalSpacing}
        reference={lineNumberRef}
        onSubmitEditing={() => colorNameRef.current?.focus()}
        blurOnSubmit={false}
        returnKeyType="next"
      />
      <CustomTextInput
        label={CarFormFields.color.label}
        value={formState.color}
        onChangeText={text => handleOnTextInputChange(text, 'color')}
        placeholder={CarFormFields.color.label}
        style={styles.verticalSpacing}
        reference={colorNameRef}
        onSubmitEditing={() => serialNumberRef.current?.focus()}
        blurOnSubmit={false}
        returnKeyType="next"
      />
      <CustomTextInput
        label={CarFormFields.serialNumber.label}
        value={formState.serialNumber}
        onChangeText={text => handleOnTextInputChange(text, 'serialNumber')}
        placeholder={CarFormFields.serialNumber.label}
        style={styles.verticalSpacing}
        reference={serialNumberRef}
      />
      <ExpandableView
        style={styles.verticalSpacing}
        expanded={formState.hasInsuranceCompany}
        onExpand={hasInsuranceCompany =>
          setFormState({...formState, hasInsuranceCompany})
        }
        title={CarFormFields.hasInsuranceCompany.label}>
        <CustomTextInput
          label={CarFormFields.insurancePolicyNumber.label}
          value={formState.insurancePolicyNumber}
          onChangeText={text =>
            handleOnTextInputChange(text, 'insurancePolicyNumber')
          }
          placeholder={CarFormFields.insurancePolicyNumber.label}
          style={styles.verticalSpacing}
          onSubmitEditing={() => insuranceCompanyRef.current?.focus()}
          returnKeyType="next"
          blurOnSubmit={false}
        />
        <CustomTextInput
          label={CarFormFields.insuranceCompany.label}
          value={formState.insuranceCompany}
          onChangeText={text =>
            handleOnTextInputChange(text, 'insuranceCompany')
          }
          placeholder={CarFormFields.insuranceCompany.label}
          style={styles.verticalSpacing}
          reference={insuranceCompanyRef}
        />
      </ExpandableView>
      <ExpandableView
        style={styles.verticalSpacing}
        expanded={formState.hastEnvironmentalVerification}
        onExpand={hastEnvironmentalVerification =>
          setFormState({...formState, hastEnvironmentalVerification})
        }
        title={CarFormFields.hastEnvironmentalVerification.label}>
        {generateFormInput<keyof CarFormType>(
          [CarFormFields.environmentalVerification],
          formState,
          handleOnTextInputChange,

          styles.verticalSpacing,
        )}
      </ExpandableView>
      <CustomPicker
        style={styles.verticalSpacing}
        title="Uso del vehículo"
        options={CarTypeUseOptions}
        onChangeValue={value => handleOnTextInputChange(value, 'typeUse')}
        selectedValue={formState.typeUse}
      />
      <ExpandableView
        style={styles.verticalSpacing}
        title={CarFormFields.craneDrag.label}
        expanded={formState.craneDrag}
        onExpand={craneDrag => setFormState({...formState, craneDrag})}>
        <CustomTextInput
          label={CarFormFields.stockNumber.label}
          value={formState.stockNumber}
          onChangeText={text => handleOnTextInputChange(text, 'stockNumber')}
          placeholder={CarFormFields.stockNumber.label}
          style={styles.verticalSpacing}
          onSubmitEditing={() => craneDragCompanyRef.current?.focus()}
          blurOnSubmit={false}
          returnKeyType="next"
        />
        <CustomTextInput
          label={CarFormFields.craneDragCompany.label}
          value={formState.craneDragCompany}
          onChangeText={text =>
            handleOnTextInputChange(text, 'craneDragCompany')
          }
          placeholder={CarFormFields.craneDragCompany.label}
          style={styles.verticalSpacing}
          reference={craneDragCompanyRef}
        />
      </ExpandableView>
    </FormWrapper>
  );
};

export default DriverForm;

const styles = StyleSheet.create({
  container: {flex: 1},
  verticalSpacing: {marginBottom: MEDIUM_MARGIN_SIZE},
});
