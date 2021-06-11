import {RESET_FORM} from '../InfractionForm/InfractionFormActionTypes';
import {
  InfractionsActionTypes,
  InfractionsReducerStateType,
  FETCH_INFRACTIONS,
  FETCH_INFRACTIONS_SUCCESS,
  FETCH_INFRACTIONS_FAIL,
  CREATE_INFRACTION,
  CREATE_INFRACTION_SUCCESS,
  CREATE_INFRACTION_FAIL,
} from './InfractionsActionTypes';

const initialState: InfractionsReducerStateType = {
  infractions: [],
  loading: false,
  errorDescription: null,
  createInfractionErrorDescription: null,
  createdInfractionFolio: null,
  creatingInfraction: false,
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
    case CREATE_INFRACTION:
      return {
        ...state,
        creatingInfraction: true,
        createdInfractionFolio: null,
        createInfractionErrorDescription: null,
      };
    case CREATE_INFRACTION_SUCCESS:
      return {
        ...state,
        creatingInfraction: false,
        createdInfractionFolio: action.payload,
      };
    case CREATE_INFRACTION_FAIL:
      return {
        ...state,
        creatingInfraction: false,
        createInfractionErrorDescription: action.payload,
      };
    case RESET_FORM:
      return {...state, createdInfractionFolio: null};
    default:
      return state;
  }
};
