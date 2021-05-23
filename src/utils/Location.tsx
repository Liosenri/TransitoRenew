import RNLocation from 'react-native-location';
import {CoordinateType} from '@/constants/types';

export const requestPermissions = () =>
  RNLocation.requestPermission({
    ios: 'whenInUse', // or 'always'
    android: {
      detail: 'fine', // or 'fine'
      rationale: {
        title: 'We need to access your location',
        message: 'We use your location to show where you are on the map',
        buttonPositive: 'OK',
        buttonNegative: 'Cancel',
      },
    },
  });

export const getLatestLocation = () => {
  RNLocation.configure({distanceFilter: undefined});
  return RNLocation.getLatestLocation({timeout: 20000});
};

export const getDeviceLocation = async (): Promise<CoordinateType> => {
  try {
    const permissions = await requestPermissions();
    if (permissions) {
      const deviceLocations = await getLatestLocation();
      if (deviceLocations) {
        const {longitude, latitude} = deviceLocations;
        return Promise.resolve({latitude, longitude});
      } else {
        return Promise.reject(
          'Ocurrió un error al intentar obtener su ubicación',
        );
      }
    } else {
      return Promise.reject(
        'Para poder mostrar su ubicación en el mapa , requiere habilitar los permisos de ubicación',
      );
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
