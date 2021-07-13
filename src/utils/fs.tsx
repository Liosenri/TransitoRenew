import RNFS from 'react-native-fs';
import {ayuntamientoBase64, verTequieroBase64} from '@/constants';

export const saveTicketImages = () =>
  Promise.all([
    RNFS.writeFile(
      RNFS.DocumentDirectoryPath + '/tequiero.png',
      verTequieroBase64,
      'base64',
    ),
    RNFS.writeFile(
      RNFS.DocumentDirectoryPath + '/ayuntamiento.png',
      ayuntamientoBase64,
      'base64',
    ),
  ]);

export const teQuieroExists = () =>
  RNFS.exists(RNFS.DocumentDirectoryPath + '/tequiero.png');

export const ayuntamientoExists = () =>
  RNFS.exists(RNFS.DocumentDirectoryPath + '/ayuntamiento.png');

export const folioSignatureExists = async (folio: string) =>
  RNFS.exists(RNFS.DocumentDirectoryPath + '/' + folio + '.png');

export const getFolioSignatureUri = (folio: string) =>
  'file:///' + RNFS.DocumentDirectoryPath + '/' + folio + '.png';

export const saveBase64AsImage = (base64: string, fileName: string) =>
  RNFS.writeFile(
    RNFS.DocumentDirectoryPath + '/' + fileName + '.png',
    base64,
    'base64',
  );
