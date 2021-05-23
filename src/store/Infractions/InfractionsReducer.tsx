import {
  InfractionsActionTypes,
  InfractionsReducerStateType,
  FETCH_INFRACTIONS,
  FETCH_INFRACTIONS_SUCCESS,
  FETCH_INFRACTIONS_FAIL,
} from './InfractionsActionTypes';

const initialState: InfractionsReducerStateType = {
  infractions: [],
  loading: false,
  errorDescription: null,
};

export default (
  state = initialState,
  action: InfractionsActionTypes,
): InfractionsReducerStateType => {
  switch (action.type) {
    case FETCH_INFRACTIONS:
      return {
        ...state,
        errorDescription: null,
        loading: true,
      };
    case FETCH_INFRACTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        infractions: action.payload,
      };
    case FETCH_INFRACTIONS_FAIL:
      return {
        ...state,
        loading: false,
        errorDescription: action.payload,
      };
    default:
      return state;
  }
};
