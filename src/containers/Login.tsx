import React, {RefObject, useRef, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  Image,
  TextInput,
} from 'react-native';
import {MARGIN_SIZE, MEDIUM_MARGIN_SIZE, PRIMARY_COLOR} from '@/constants';
import {CustomButton, CustomTextInput, ErrorText} from '@/components';
import {useDispatch, useSelector} from 'react-redux';
import {signInWithEmailAndPasswordAction} from '@/store/Auth/AuthActions';
import {StoreStateType} from '@/store';

interface Props {}

const Login = ({}: Props) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const passwordInputRef: RefObject<TextInput> = useRef(null);

  const {loading, errorDescription} = useSelector(
    (state: StoreStateType) => state.AuthReducer,
  );

  const dispatch = useDispatch();

  const onSignin = () => {
    if (password.length && email.length) {
      dispatch(signInWithEmailAndPasswordAction(email, password));
    }
  };

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
      <Image
        style={styles.img}
        source={require('@/assets/images/logo_ayuntamiento.png')}
        resizeMode="contain"
      />
      <CustomTextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Usuario"
        style={styles.textInput}
        onSubmitEditing={() => passwordInputRef.current?.focus()}
      />
      <CustomTextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Contraseña"
        secureTextEntry
        style={styles.textInput}
        reference={passwordInputRef}
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
  textInput: {marginVertical: MEDIUM_MARGIN_SIZE},
  img: {height: 200, aspectRatio: 1, alignSelf: 'center'},
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
