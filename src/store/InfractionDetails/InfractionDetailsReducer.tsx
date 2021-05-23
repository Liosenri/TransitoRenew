import {
  FETCH_INFRACTION_DETAILS,
  FETCH_INFRACTION_DETAILS_FAIL,
  FETCH_INFRACTION_DETAILS_SUCCESS,
  InfractionDetailsActionTypes,
  InfractionDetailsReducerStateType,
} from './InfractionDetailsActionTypes';

const initialState: InfractionDetailsReducerStateType = {
  details: null,
  loading: false,
  errorDescription: null,
};

export default (
  state = initialState,
  action: InfractionDetailsActionTypes,
): InfractionDetailsReducerStateType => {
  switch (action.type) {
    case FETCH_INFRACTION_DETAILS:
      return {...state, loading: true, errorDescription: null};
    case FETCH_INFRACTION_DETAILS_SUCCESS:
      return {...state, loading: false, details: action.payload};
    case FETCH_INFRACTION_DETAILS_FAIL:
      return {...state, loading: false, errorDescription: action.payload};
    default:
      return state;
  }
};
