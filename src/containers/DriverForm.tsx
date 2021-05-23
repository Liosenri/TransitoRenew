import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {DriverFormType} from '@/constants/types';
import {DriverFormFields} from '@/constants/forms';
import {generateFormInput, validateFormRequiredValues} from '@/utils/forms';
import {ExpandableView, FormWrapper} from '@/components';
import _ from 'lodash';
import {useDispatch, useSelector} from 'react-redux';
import {StoreStateType} from '@/store';
import {setDriverFormAction} from '@/store/InfractionForm/InfractionFormActions';
import {createInvalidFormAlert} from '../utils/Alerts';
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

    if (invalidFields.length) {
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
        {generateFormInput<keyof DriverFormType>(
          [DriverFormFields.licenseNumber],
          formState,
          handleOnTextInputChange,
          styles.verticalSpace,
        )}
      </ExpandableView>
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
        handleOnTextInputChange,
        styles.verticalSpace,
      )}
    </FormWrapper>
  );
};

export default DriverForm;

const styles = StyleSheet.create({
  container: {flex: 1},
  verticalSpace: {marginBottom: MEDIUM_MARGIN_SIZE},
});
