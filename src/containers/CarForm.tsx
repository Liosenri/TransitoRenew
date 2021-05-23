import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {ExpandableView, FormWrapper, CustomPicker} from '@/components';
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

    if (invalidFields.length) {
      dispatch(setCarFormAction(formState));
      onContinue();
    } else {
      createInvalidFormAlert(invalidFields);
    }
  };

  return (
    <FormWrapper onBack={onBack} onContinue={handleOnContinueButtonPress}>
      {generateFormInput<keyof CarFormType>(
        [
          CarFormFields.plates,
          CarFormFields.brand,
          CarFormFields.model,
          CarFormFields.type,
          CarFormFields.line,
          CarFormFields.color,
          CarFormFields.serialNumber,
        ],
        formState,
        handleOnTextInputChange,
        styles.verticalSpacing,
      )}
      <ExpandableView
        style={styles.verticalSpacing}
        expanded={formState.hasInsuranceCompany}
        onExpand={hasInsuranceCompany =>
          setFormState({...formState, hasInsuranceCompany})
        }
        title={CarFormFields.hasInsuranceCompany.label}>
        {generateFormInput<keyof CarFormType>(
          [CarFormFields.insurancePolicyNumber, CarFormFields.insuranceCompany],
          formState,
          handleOnTextInputChange,

          styles.verticalSpacing,
        )}
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
        {generateFormInput<keyof CarFormType>(
          [CarFormFields.stockNumber, CarFormFields.craneDragCompany],
          formState,
          handleOnTextInputChange,

          styles.verticalSpacing,
        )}
      </ExpandableView>
    </FormWrapper>
  );
};

export default DriverForm;

const styles = StyleSheet.create({
  container: {flex: 1},
  verticalSpacing: {marginBottom: MEDIUM_MARGIN_SIZE},
});
