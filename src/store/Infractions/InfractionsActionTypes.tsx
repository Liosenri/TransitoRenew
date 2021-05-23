import {InfractionType} from '@/constants/Types';

export const FETCH_INFRACTIONS = 'FETCH_INFRACTIONS';
export const FETCH_INFRACTIONS_SUCCESS = 'FETCH_INFRACTIONS_SUCCESS';
export const FETCH_INFRACTIONS_FAIL = 'FETCH_INFRACTIONS_FAIL';

export interface InfractionsReducerStateType {
  infractions: InfractionType[];
  errorDescription: string | null;
  loading: boolean;
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

export type InfractionsActionTypes =
  | FetchInfractionsActionType
  | FetchInfractionsSuccessActionType
  | FetchInfractionsFailActionType;
