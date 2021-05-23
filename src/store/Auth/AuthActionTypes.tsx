import {UserCredentialsType} from '@/constants/types';

export const SIGN_IN = 'SIGNING_IN';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAIL = 'SIGNIN_FAIL';

export interface AuthReducerStateType {
  credentials: UserCredentialsType | null;
  errorDescription: string | null;
  loading: boolean;
}

interface SignInInActionType {
  type: typeof SIGN_IN;
}

interface SignInSuccesActionType {
  type: typeof SIGNIN_SUCCESS;
  payload: UserCredentialsType;
}

interface SignInFailActionType {
  type: typeof SIGNIN_FAIL;
  payload: string;
}

export type AuthActionTypes =
  | SignInInActionType
  | SignInSuccesActionType
  | SignInFailActionType;
