import {ArticleType} from '@/constants/types';
import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {fetchTrafficRegulationsService} from '@/api/TrafficRegulations';
import {trafficRegulationsMock} from '@/utils/Mocks';
import {StoreStateType} from '..';
import {
  ADD_SELECTED_TRAFFIC_REGULATION,
  FETCH_TRAFFIC_REGULATIONS,
  FETCH_TRAFFIC_REGULATIONS_FAIL,
  FETCH_TRAFFIC_REGULATIONS_SUCCESS,
  REMOVE_SELECTED_TRAFFIC_REGULATION,
  TrafficRegulationsActionTypes,
} from './TrafficRegulationsActionTypes';

export const fetchTrafficRegulationsSuccessAction = (
  payload: ArticleType[],
): TrafficRegulationsActionTypes => {
  return {
    type: FETCH_TRAFFIC_REGULATIONS_SUCCESS,
    payload,
  };
};

export const fetchTrafficRegulationsFailAction = (
  payload: string,
): TrafficRegulationsActionTypes => {
  return {
    type: FETCH_TRAFFIC_REGULATIONS_FAIL,
    payload,
  };
};

export const fetchTrafficRegulationsAction = (): TrafficRegulationsActionTypes => {
  return {
    type: FETCH_TRAFFIC_REGULATIONS,
  };
};

export const fetchTrafficRegulations = (): ThunkAction<
  void,
  StoreStateType,
  unknown,
  Action<string>
> => async (dispatch, _) => {
  dispatch(fetchTrafficRegulationsAction());
  try {
    // let articles = await fetchTrafficRegulationsService();
    let articles = trafficRegulationsMock;
    let modifiedArticles = articles.map(article => ({
      ...article,
      selected: false,
    }));
    return dispatch(fetchTrafficRegulationsSuccessAction(modifiedArticles));
  } catch (error) {
    return dispatch(fetchTrafficRegulationsFailAction(error.message));
  }
};

export const addSelectedTrafficRegulationAction = (
  key: string,
): TrafficRegulationsActionTypes => ({
  type: ADD_SELECTED_TRAFFIC_REGULATION,
  payload: key,
});

export const removeSelectedTrafficRegulationAction = (
  key: string,
): TrafficRegulationsActionTypes => ({
  type: REMOVE_SELECTED_TRAFFIC_REGULATION,
  payload: key,
});
