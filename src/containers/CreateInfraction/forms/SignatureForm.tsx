import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {
  Card,
  FloatingButton,
  LoadingScreen,
  NextBackButtonsView,
} from '@/components';
import Signature, {SignatureViewRef} from 'react-native-signature-canvas';
import {extractbase64FromSignatureString} from '@/utils/image';
import {BACKGROUND_GRAY_COLOR, MARGIN_SIZE} from '@/constants';
import {useDispatch, useSelector} from 'react-redux';
import {createInfractionAction} from '@/store/Infractions/InfractionsActions';
import {StoreStateType} from '@/store';

interface Props {
  onBack: () => void;
  onContinue: (folio: string) => void;
}

const SignatureForm = ({onBack, onContinue}: Props) => {
  const ref = useRef<SignatureViewRef | null>(null);
  const [signatureData, setSignatureData] = useState('');

  const {
    InfractionsReducer: {
      createdInfractionFolio,
      creatingInfraction,
      createInfractionErrorDescription,
    },
  } = useSelector((state: StoreStateType) => state);

  useEffect(() => {
    if (createInfractionErrorDescription) {
      Alert.alert('Error', createInfractionErrorDescription, [
        {text: 'Ok', style: 'cancel', onPress: () => {}},
      ]);
    }

    if (createdInfractionFolio) {
      Alert.alert('Infracción creada', createdInfractionFolio, [
        {
          text: 'Ok',
          onPress: () => onContinue(createdInfractionFolio),
        },
      ]);
    }
  }, [createdInfractionFolio, createInfractionErrorDescription, onContinue]);

  const dispatch = useDispatch();

  const handleOnOkSignature = (signature: string) =>
    setSignatureData(extractbase64FromSignatureString(signature));

  const onSignatureEnd = () => {
    if (ref.current) {
      ref.current.readSignature();
    }
  };

  const eraseSignature = () => {
    if (ref.current) {
      ref.current.clearSignature();
      setSignatureData('');
    }
  };

  const webStyle = `.m-signature-pad--footer
    .save {
        display: none;
    }
    .clear {
        display: none;
    }
`;

  if (creatingInfraction) {
    return <LoadingScreen message="Creando Ticket" />;
  }

  return (
    <View style={styles.container}>
      <Card title="Firma del ciudadano" style={{margin: MARGIN_SIZE}}>
        <View style={styles.signatureContainer}>
          <Signature
            ref={ref}
            onEnd={onSignatureEnd}
            onOK={handleOnOkSignature}
            clearText="Borrar"
            confirmText="Crear Infracción"
            webStyle={webStyle}
            descriptionText=""
          />
        </View>
        <FloatingButton onPress={eraseSignature} iconName="eraser" />
      </Card>

      <NextBackButtonsView
        onBack={onBack}
        onContinue={() => dispatch(createInfractionAction(signatureData))}
        nextButtonTitle="Crear multa"
        nextButtonDisabled={!signatureData.length}
      />
    </View>
  );
};

export default SignatureForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_GRAY_COLOR,
    justifyContent: 'space-between',
  },
  signatureContainer: {height: 300},
});
