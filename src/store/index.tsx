import {applyMiddleware, combineReducers, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import InfractionFormReducer from '@/store/InfractionForm/InfractionFormReducer';
import TrafficRegulationsReducer from '@/store/TrafficRegulations/TrafficRegulationsReducer';
import DeviceLocationReducer from '@/store/DeviceLocation/DeviceLocationReducer';
import AuthReducer from '@/store/Auth/AuthReducer';
import InfractionsReducer from '@/store/Infractions/InfractionsReducer';
import InfractionDetailsReducer from '@/store/InfractionDetails/InfractionDetailsReducer';

export const rootReducer = combineReducers({
  InfractionFormReducer,
  TrafficRegulationsReducer,
  DeviceLocationReducer,
  AuthReducer,
  InfractionsReducer,
  InfractionDetailsReducer,
});

export type StoreStateType = ReturnType<typeof rootReducer>;

const middlewares = [ReduxThunk];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

export default createStore(rootReducer, {}, applyMiddleware(...middlewares));
