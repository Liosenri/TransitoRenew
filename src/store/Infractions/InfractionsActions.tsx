import {ThunkAction} from 'redux-thunk';
import {StoreStateType} from '..';
import {Action} from 'redux';
import {fetchInfractions} from '@/api/Infractions';
import {
  FETCH_INFRACTIONS,
  FETCH_INFRACTIONS_FAIL,
  FETCH_INFRACTIONS_SUCCESS,
  InfractionsActionTypes,
} from './InfractionsActionTypes';
import {InfractionType} from '@/constants/types';

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
