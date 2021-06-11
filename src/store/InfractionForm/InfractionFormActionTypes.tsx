import {
  CarFormType,
  DriverFormType,
  WarrantyObservationsFormType,
} from '@/constants/types';

export const SET_DRIVER_FORM = 'SET_DRIVER_FORM';
export const SET_CAR_FORM = 'SET_CAR_FORM';
export const SET_WARRANTY_OBSERVATIONS_FORM = 'SET_WARRANTY_OBSERVATIONS_FORM';
export const RESET_FORM = 'RESET_FORM';

export interface InfractionFormReducerStateType {
  driverForm: DriverFormType | null;
  carForm: CarFormType | null;
  warrantyObservationsForm: WarrantyObservationsFormType | null;
}

export interface SetDriverFormActionType {
  type: typeof SET_DRIVER_FORM;
  payload: DriverFormType;
}

export interface SetCarFormActionType {
  type: typeof SET_CAR_FORM;
  payload: CarFormType;
}

export interface SetWarrantyObservationsFormActionType {
  type: typeof SET_WARRANTY_OBSERVATIONS_FORM;
  payload: WarrantyObservationsFormType;
}

export interface ResetFormActionType {
  type: typeof RESET_FORM;
}

export type InfractionFormActionTypes =
  | SetDriverFormActionType
  | SetCarFormActionType
  | SetWarrantyObservationsFormActionType
  | ResetFormActionType;
