import {
  TrafficRegulationsReducerStateType,
  TrafficRegulationsActionTypes,
  FETCH_TRAFFIC_REGULATIONS,
  FETCH_TRAFFIC_REGULATIONS_SUCCESS,
  FETCH_TRAFFIC_REGULATIONS_FAIL,
  ADD_SELECTED_TRAFFIC_REGULATION,
  REMOVE_SELECTED_TRAFFIC_REGULATION,
} from './TrafficRegulationsActionTypes';

const INITIAL_STATE: TrafficRegulationsReducerStateType = {
  articles: [],
  selectedArticlesKeys: [],
  error: null,
  loading: false,
};

export default function trafficRegulationsReducer(
  state = INITIAL_STATE,
  action: TrafficRegulationsActionTypes,
): TrafficRegulationsReducerStateType {
  switch (action.type) {
    case FETCH_TRAFFIC_REGULATIONS:
      return {...state, loading: true};
    case FETCH_TRAFFIC_REGULATIONS_SUCCESS:
      return {...state, articles: action.payload, loading: false};
    case FETCH_TRAFFIC_REGULATIONS_FAIL:
      return {...state, error: action.payload, loading: false};
    case ADD_SELECTED_TRAFFIC_REGULATION:
      return {
        ...state,
        articles: [
          ...state.articles.map(item =>
            item.clave === action.payload ? {...item, selected: true} : item,
          ),
        ],
      };
    case REMOVE_SELECTED_TRAFFIC_REGULATION:
      return {
        ...state,
        articles: [
          ...state.articles.map(item =>
            item.clave === action.payload ? {...item, selected: false} : item,
          ),
        ],
      };
    default:
      return state;
  }
}
