import {ThunkAction} from 'redux-thunk';

import {AuthActionTypes, SIGNIN_FAIL, SIGN_IN} from './AuthActionTypes';

import {Action} from 'redux';

import {SIGNIN_SUCCESS} from './AuthActionTypes';
import {UserCredentialsType} from '@/constants/types';
import {StoreStateType} from '..';
import {signinUsingEmailPassword} from '@/api/Auth';

export const signinAction = (): AuthActionTypes => {
  return {type: SIGN_IN};
};

export const signinInSuccessAction = (
  credentials: UserCredentialsType,
): AuthActionTypes => {
  return {
    type: SIGNIN_SUCCESS,
    payload: credentials,
  };
};

export const signInFailAction = (errorDescription: string): AuthActionTypes => {
  return {
    type: SIGNIN_FAIL,
    payload: errorDescription,
  };
};

export const signInWithEmailAndPasswordAction = (
  email: string,
  password: string,
): ThunkAction<
  void,
  StoreStateType,
  unknown,
  Action<string>
> => async dispatch => {
  dispatch(signinAction());
  try {
    const credentials = await signinUsingEmailPassword(email, password);
    return dispatch(signinInSuccessAction(credentials));
  } catch (error) {
    return dispatch(signInFailAction(error));
  }
};
