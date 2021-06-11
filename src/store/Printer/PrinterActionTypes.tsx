export const PRINT = 'PRINT';
export const PRINT_SUCCESS = 'PRINT_SUCCESS';
export const PRINT_FAILURE = 'PRINT_FAILURE';

interface PrintActionType {
  type: typeof PRINT;
}

interface PrintSuccessActionType {
  type: typeof PRINT_SUCCESS;
}

interface PrintFailureActionType {
  type: typeof PRINT_FAILURE;
  payload: string;
}

export interface PrinterReducerType {
  printing: boolean;
  errorMessage: string | null;
}

export type PrinterActionType =
  | PrintActionType
  | PrintSuccessActionType
  | PrintFailureActionType;
