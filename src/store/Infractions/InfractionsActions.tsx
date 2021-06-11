import {ThunkAction} from 'redux-thunk';
import {StoreStateType} from '..';
import {Action} from 'redux';
import {fetchInfractions, crateInfraction} from '@/api/Infractions';
import {
  CREATE_INFRACTION_SUCCESS,
  FETCH_INFRACTIONS,
  FETCH_INFRACTIONS_FAIL,
  FETCH_INFRACTIONS_SUCCESS,
  InfractionsActionTypes,
  CREATE_INFRACTION,
  CREATE_INFRACTION_FAIL,
} from './InfractionsActionTypes';
import {InfractionType} from '@/constants/types';
import {createRequestPayLoadFromState} from '@/utils/forms';

export const fetchInfractionsAction = (): InfractionsActionTypes => ({
  type: FETCH_INFRACTIONS,
});

export const fetchInfractionsSuccessAction = (
  infractions: InfractionType[],
): InfractionsActionTypes => ({
  type: FETCH_INFRACTIONS_SUCCESS,
  payload: infractions,
});

export const fetchInfractionsFailAction = (
  errorDescription: string,
): InfractionsActionTypes => ({
  type: FETCH_INFRACTIONS_FAIL,
  payload: errorDescription,
});

export const fetchUserInfractionsAction = (): ThunkAction<
  void,
  StoreStateType,
  unknown,
  Action<string>
> => async (dispatch, getState) => {
  dispatch(fetchInfractionsAction());
  const credentials = getState().AuthReducer.credentials;
  if (credentials) {
    const {token, uuIdUser} = credentials;
    try {
      const infractions = await fetchInfractions(token, uuIdUser);
      return dispatch(fetchInfractionsSuccessAction(infractions));
    } catch (error) {
      return dispatch(fetchInfractionsFailAction(error.message));
    }
  }
};

export const createInfractionSuccessAction = (
  folio: string,
): InfractionsActionTypes => ({
  type: CREATE_INFRACTION_SUCCESS,
  payload: folio,
});

export const createInfractionFailAction = (
  errorDescription: string,
): InfractionsActionTypes => ({
  type: CREATE_INFRACTION_FAIL,
  payload: errorDescription,
});

export const createInfractionAction = (): // creationDate: Date,
// signatureBase64: string,
ThunkAction<void, StoreStateType, unknown, Action<string>> => async (
  dispatch,
  getState,
) => {
  dispatch({
    type: CREATE_INFRACTION,
  });
  const credentials = getState().AuthReducer.credentials;
  const creationDate: Date = new Date();
  const body = createRequestPayLoadFromState(getState(), creationDate);

  if (credentials) {
    const {token} = credentials;
    try {
      const folio = await crateInfraction(token, body);
      return dispatch(createInfractionSuccessAction(folio));
    } catch (error) {
      return dispatch(createInfractionFailAction(error));
    }
  }
};
