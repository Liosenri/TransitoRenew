import {
  CarFormType,
  DriverFormType,
  WarrantyObservationsFormType,
} from '@/constants/types';
import {
  InfractionFormActionTypes,
  SET_CAR_FORM,
  SET_DRIVER_FORM,
  SET_WARRANTY_OBSERVATIONS_FORM,
} from './InfractionFormActionTypes';

export const setDriverFormAction = (
  payload: DriverFormType,
): InfractionFormActionTypes => ({
  type: SET_DRIVER_FORM,
  payload,
});

export const setCarFormAction = (
  payload: CarFormType,
): InfractionFormActionTypes => ({
  type: SET_CAR_FORM,
  payload,
});

export const setWarrantyObservationsFormAction = (
  payload: WarrantyObservationsFormType,
): InfractionFormActionTypes => ({
  type: SET_WARRANTY_OBSERVATIONS_FORM,
  payload,
});
