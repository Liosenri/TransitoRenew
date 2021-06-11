import {InfractionType} from '@/constants/Types';
import {ResetFormActionType} from '../InfractionForm/InfractionFormActionTypes';

export const FETCH_INFRACTIONS = 'FETCH_INFRACTIONS';
export const FETCH_INFRACTIONS_SUCCESS = 'FETCH_INFRACTIONS_SUCCESS';
export const FETCH_INFRACTIONS_FAIL = 'FETCH_INFRACTIONS_FAIL';
export const CREATE_INFRACTION = 'CREATE_INFRACTION';
export const CREATE_INFRACTION_SUCCESS = 'CREATE_INFRACTION_SUCCESS';
export const CREATE_INFRACTION_FAIL = 'CREATE_INFRACTION_FAIL';
export interface InfractionsReducerStateType {
  infractions: InfractionType[];
  errorDescription: string | null;
  loading: boolean;
  createdInfractionFolio: string | null;
  creatingInfraction: boolean;
  createInfractionErrorDescription: string | null;
}

interface FetchInfractionsActionType {
  type: typeof FETCH_INFRACTIONS;
}

interface FetchInfractionsSuccessActionType {
  type: typeof FETCH_INFRACTIONS_SUCCESS;
  payload: InfractionType[];
}

interface FetchInfractionsFailActionType {
  type: typeof FETCH_INFRACTIONS_FAIL;
  payload: string;
}

interface CreateInfractionActionType {
  type: typeof CREATE_INFRACTION;
}

interface CreateInfractionSuccessActionType {
  type: typeof CREATE_INFRACTION_SUCCESS;
  payload: string;
}

interface CreateInfractionFailedActionType {
  type: typeof CREATE_INFRACTION_FAIL;
  payload: string;
}

export type InfractionsActionTypes =
  | FetchInfractionsActionType
  | FetchInfractionsSuccessActionType
  | FetchInfractionsFailActionType
  | CreateInfractionActionType
  | CreateInfractionSuccessActionType
  | CreateInfractionFailedActionType
  | ResetFormActionType;
