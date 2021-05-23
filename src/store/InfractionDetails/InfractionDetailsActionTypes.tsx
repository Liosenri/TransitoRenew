import {InfractionDetailsType} from '@/constants/types';

export const FETCH_INFRACTION_DETAILS = 'FETCH_INFRACTION_DETAILS';
export const FETCH_INFRACTION_DETAILS_FAIL = 'FETCH_INFRACTION_DETAILS_FAIL';
export const FETCH_INFRACTION_DETAILS_SUCCESS =
  'FETCH_INFRACTION_DETAILS_SUCCESS';

export interface InfractionDetailsReducerStateType {
  details: InfractionDetailsType | null;
  errorDescription: string | null;
  loading: boolean;
}

interface FetchInfractionDetailsActionType {
  type: typeof FETCH_INFRACTION_DETAILS;
}

interface FetchInfractionDetailsFailActionType {
  type: typeof FETCH_INFRACTION_DETAILS_FAIL;
  payload: string;
}

interface FetchInfractionDetailsSuccessActionType {
  type: typeof FETCH_INFRACTION_DETAILS_SUCCESS;
  payload: InfractionDetailsType;
}

export type InfractionDetailsActionTypes =
  | FetchInfractionDetailsActionType
  | FetchInfractionDetailsFailActionType
  | FetchInfractionDetailsSuccessActionType;
