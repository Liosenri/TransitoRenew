import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, ActivityIndicator} from 'react-native';
import {MARGIN_SIZE, MEDIUM_MARGIN_SIZE, PRIMARY_COLOR} from '@/constants';
import {CustomButton, CustomTextInput, ErrorText} from '@/components';
import {useDispatch, useSelector} from 'react-redux';
import {signInWithEmailAndPasswordAction} from '@/store/Auth/AuthActions';
import {StoreStateType} from '@/store';

interface Props {}

const Login = ({}: Props) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const {loading, errorDescription} = useSelector(
    (state: StoreStateType) => state.AuthReducer,
  );

  const dispatch = useDispatch();

  const onSignin = () =>
    dispatch(signInWithEmailAndPasswordAction('lhernandez', 'RPvfcdydYX'));

  const button = loading ? (
    <ActivityIndicator style={styles.textInput} color={PRIMARY_COLOR} />
  ) : (
    <CustomButton
      style={styles.textInput}
      title="Iniciar sesión"
      onPress={onSignin}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <CustomTextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Usuario"
        style={styles.textInput}
      />
      <CustomTextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Contraseña"
        secureTextEntry
        style={styles.textInput}
      />
      {button}
      {errorDescription && (
        <ErrorText style={styles.textInput} text={errorDescription} />
      )}
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {flex: 1, margin: MARGIN_SIZE},
  textInput: {marginBottom: MEDIUM_MARGIN_SIZE},
});
