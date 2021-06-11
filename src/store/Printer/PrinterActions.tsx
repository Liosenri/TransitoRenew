import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {StoreStateType} from '..';

// @ts-ignore
import EscPos from '@leesiongchan/react-native-esc-pos';
import {
  disclosureDesign,
  driverSignatureDesign,
  createTicketHeader,
  createDriverSection,
  createVehicleSection,
  createInfractionDetailSection,
  createPaymentSection,
  creatrQRSection,
} from '@/utils/printer';
import {
  teQuieroExists,
  ayuntamientoExists,
  saveTicketImages,
  folioSignatureExists,
} from '@/utils/fs';
import RNFS from 'react-native-fs';
import {InfractionDetailsType} from '@/constants/types';
import {
  PrinterActionType,
  PRINT,
  PRINT_FAILURE,
  PRINT_SUCCESS,
} from './PrinterActionTypes';

export const printFailureAction = (error: string): PrinterActionType => ({
  type: PRINT_FAILURE,
  payload: error,
});

export const printSuccess = (): PrinterActionType => ({
  type: PRINT_SUCCESS,
});

export const printAction = (
  ticketDetails: InfractionDetailsType,
): ThunkAction<
  void,
  StoreStateType,
  PrinterActionType,
  Action<string>
> => async (dispatch, getState) => {
  const {
    AuthReducer: {credentials},
  } = getState();
  dispatch({type: PRINT});
  try {
    EscPos.setPrintingSize(EscPos.PRINTING_SIZE_58_MM);
    EscPos.setTextDensity(3);

    const tq = await teQuieroExists();
    const ay = await ayuntamientoExists();
    const signatureImageExists = await folioSignatureExists(
      ticketDetails.folio,
    );

    if (!tq || !ay) {
      await saveTicketImages();
    }

    await EscPos.printImage(RNFS.DocumentDirectoryPath + '/ayuntamiento.png');
    await EscPos.printDesign(createTicketHeader(ticketDetails));
    await EscPos.printDesign(createDriverSection(ticketDetails.driverInfo));
    await EscPos.printDesign(createVehicleSection(ticketDetails));
    await EscPos.printDesign(createInfractionDetailSection(ticketDetails));
    if (ticketDetails.ceroFilasResponse?.multa && credentials) {
      await EscPos.printDesign(
        createPaymentSection(
          ticketDetails.ceroFilasResponse.multa,
          credentials,
        ),
      );
    }

    if (signatureImageExists) {
      await EscPos.printImageWithOffset(
        RNFS.DocumentDirectoryPath + '/' + ticketDetails.folio + '.png',
        100,
      );
    }
    await EscPos.printDesign(driverSignatureDesign);
    await EscPos.printDesign(creatrQRSection(ticketDetails.folio));

    await EscPos.printDesign(
      disclosureDesign.normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
    );
    return dispatch(printSuccess());
  } catch (error) {
    return dispatch(printFailureAction(error.message));
  }
};
