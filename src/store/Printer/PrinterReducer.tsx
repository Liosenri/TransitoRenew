import {
  PRINT,
  PRINT_FAILURE,
  PRINT_SUCCESS,
  PrinterActionType,
  PrinterReducerType,
} from './PrinterActionTypes';

const initialState: PrinterReducerType = {
  printing: false,
  errorMessage: null,
};

export default (
  state = initialState,
  action: PrinterActionType,
): PrinterReducerType => {
  switch (action.type) {
    case PRINT:
      return {...state, printing: true, errorMessage: null};
    case PRINT_SUCCESS:
      return {...state, printing: false};
    case PRINT_FAILURE:
      return {...state, printing: false, errorMessage: action.payload};
    default:
      return state;
  }
};
