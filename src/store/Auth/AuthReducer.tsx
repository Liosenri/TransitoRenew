import {
  AuthActionTypes,
  AuthReducerStateType,
  SIGN_IN,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
} from './AuthActionTypes';

const initialState: AuthReducerStateType = {
  loading: false,
  errorDescription: null,
  credentials: null,
};

export default (
  state = initialState,
  action: AuthActionTypes,
): AuthReducerStateType => {
  switch (action.type) {
    case SIGN_IN:
      return {...state, errorDescription: null, loading: true};
    case SIGNIN_SUCCESS:
      return {...state, loading: false, credentials: action.payload};
    case SIGNIN_FAIL:
      return {...state, loading: false, errorDescription: action.payload};
    default:
      return state;
  }
};
