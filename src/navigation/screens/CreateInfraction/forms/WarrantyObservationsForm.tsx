import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {CustomPicker, FormWrapper, OptionalInput} from '@/components';
import {
  LevelTrafficTicketOptions,
  WarrantyObservationsFormType,
  WarrantyOptions,
} from '@/constants/types';
import {generateFormInput} from '@/utils/forms';
import {WarrantyObservationsFormFields} from '@/constants/forms';
import {useDispatch, useSelector} from 'react-redux';
import {StoreStateType} from '@/store';
import {setWarrantyObservationsFormAction} from '@/store/InfractionForm/InfractionFormActions';
import {MEDIUM_MARGIN_SIZE} from '@/constants';

interface Props {
  onContinue: () => void;
  onBack: () => void;
}

const WarrantyObservationsForm = ({onBack, onContinue}: Props) => {
  const [formState, setFormState] = useState<WarrantyObservationsFormType>({
    citizenObservations: '',
    observations: '',
    warranty: '1',
    aggravating: false,
    levelTrafficTicket: 'A',
  });

  const storeForm = useSelector(
    (state: StoreStateType) =>
      state.InfractionFormReducer.warrantyObservationsForm,
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
    dispatch(setWarrantyObservationsFormAction(formState));
    onContinue();
  };

  return (
    <FormWrapper onBack={onBack} onContinue={handleOnContinueButtonPress}>
      {generateFormInput<keyof WarrantyObservationsFormType>(
        [
          WarrantyObservationsFormFields.observations,
          WarrantyObservationsFormFields.citizenObservations,
        ],
        formState,
        handleOnTextInputChange,
        styles.verticalSpacing,
      )}
      <CustomPicker
        style={styles.verticalSpacing}
        title={WarrantyObservationsFormFields.warranty.label}
        options={WarrantyOptions}
        onChangeValue={value => handleOnTextInputChange(value, 'warranty')}
        selectedValue={formState.warranty}
      />

      <CustomPicker
        style={styles.verticalSpacing}
        title={WarrantyObservationsFormFields.levelTrafficTicket.label}
        options={LevelTrafficTicketOptions}
        onChangeValue={value =>
          handleOnTextInputChange(value, 'levelTrafficTicket')
        }
        selectedValue={formState.levelTrafficTicket}
      />

      <OptionalInput
        title="Agravante"
        containerStyle={styles.verticalSpacing}
        enabled={formState.aggravating}
        onChange={enabled => setFormState({...formState, aggravating: enabled})}
      />
    </FormWrapper>
  );
};

export default WarrantyObservationsForm;

const styles = StyleSheet.create({
  verticalSpacing: {marginBottom: MEDIUM_MARGIN_SIZE},
});
