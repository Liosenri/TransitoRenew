import {Alert} from 'react-native';

export const createInvalidFormAlert = (fields: (string | undefined)[] = []) =>
  Alert.alert(
    'Datos inválidos',
    `Es necesario llenar los siguientes campos para continuar : ${fields.concat(
      ',',
    )}`,
    [{text: 'OK', onPress: () => console.log('OK Pressed')}],
  );

export const createErrorAlert = (title: string, message: string) =>
  Alert.alert(title, message, [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
