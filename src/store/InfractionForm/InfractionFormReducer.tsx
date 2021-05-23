import {
  InfractionFormActionTypes,
  InfractionFormReducerStateType,
  SET_CAR_FORM,
  SET_DRIVER_FORM,
  SET_WARRANTY_OBSERVATIONS_FORM,
} from './InfractionFormActionTypes';

const INITIAL_STATE: InfractionFormReducerStateType = {
  carForm: null,
  driverForm: null,
  warrantyObservationsForm: null,
};

export default function infractionFormReducer(
  state = INITIAL_STATE,
  action: InfractionFormActionTypes,
): InfractionFormReducerStateType {
  switch (action.type) {
    case SET_DRIVER_FORM:
      return {...state, driverForm: action.payload};
    case SET_CAR_FORM:
      return {...state, carForm: action.payload};
    case SET_WARRANTY_OBSERVATIONS_FORM:
      return {...state, warrantyObservationsForm: action.payload};
    default:
      return state;
  }
}
