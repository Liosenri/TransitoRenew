import {ArticleType} from '@/constants/types';

export const FETCH_TRAFFIC_REGULATIONS = 'FETCH_TRAFFIC_REGULATIONS';
export const FETCH_TRAFFIC_REGULATIONS_SUCCESS =
  'FETCH_TRAFFIC_REGULATIONS_SUCCESS';
export const FETCH_TRAFFIC_REGULATIONS_FAIL = 'FETCH_TRAFFIC_REGULATIONS_FAIL';
export const ADD_SELECTED_TRAFFIC_REGULATION =
  'ADD_SELECTED_TRAFFIC_REGULATION';
export const REMOVE_SELECTED_TRAFFIC_REGULATION =
  'REMOVE_SELECTED_TRAFFIC_REGULATION';

export interface TrafficRegulationsReducerStateType {
  articles: ArticleType[];
  selectedArticlesKeys: string[];
  loading: boolean;
  error: string | null;
}

export interface FetchTrafficRegulationsActionType {
  type: typeof FETCH_TRAFFIC_REGULATIONS;
}

export interface FetchTrafficRegulationsSuccessActionType {
  type: typeof FETCH_TRAFFIC_REGULATIONS_SUCCESS;
  payload: ArticleType[];
}

export interface FetchTrafficRegulationsFailActionType {
  type: typeof FETCH_TRAFFIC_REGULATIONS_FAIL;
  payload: string;
}

interface AddSelectedTrafficRegulationActionType {
  type: typeof ADD_SELECTED_TRAFFIC_REGULATION;
  payload: string;
}

interface RemoveSelectedTrafficRegulationActionType {
  type: typeof REMOVE_SELECTED_TRAFFIC_REGULATION;
  payload: string;
}

export type TrafficRegulationsActionTypes =
  | FetchTrafficRegulationsActionType
  | FetchTrafficRegulationsSuccessActionType
  | FetchTrafficRegulationsFailActionType
  | RemoveSelectedTrafficRegulationActionType
  | AddSelectedTrafficRegulationActionType;
