import {StoreStateType} from '..';
import {ThunkAction} from 'redux-thunk';
import {Action} from 'redux';
import {fetchInfractionDetails} from '@/api/Infractions';

import {
  FETCH_INFRACTION_DETAILS,
  FETCH_INFRACTION_DETAILS_FAIL,
  FETCH_INFRACTION_DETAILS_SUCCESS,
  InfractionDetailsActionTypes,
} from './InfractionDetailsActionTypes';
import {InfractionDetailsType} from '@/constants/types';

const fetchInfractionDetailsFailAction = (
  error: string,
): InfractionDetailsActionTypes => ({
  type: FETCH_INFRACTION_DETAILS_FAIL,
  payload: error,
});

const fetchInfractionDetailsSuccessAction = (
  data: InfractionDetailsType,
): InfractionDetailsActionTypes => ({
  type: FETCH_INFRACTION_DETAILS_SUCCESS,
  payload: data,
});

export const fetchInfractionDetailsAction = (
  folio: string,
): ThunkAction<void, StoreStateType, unknown, Action<string>> => async (
  dispatch,
  getState,
) => {
  dispatch({
    type: FETCH_INFRACTION_DETAILS,
  });

  const rootState = getState();

  const {
    AuthReducer: {credentials},
  } = rootState;

  if (credentials) {
    const {token} = credentials;
    try {
      const details = await fetchInfractionDetails(token, folio);
      return dispatch(fetchInfractionDetailsSuccessAction(details));
    } catch (error) {
      return dispatch(fetchInfractionDetailsFailAction(error.message));
    }
  }
};
