
import { combineReducers } from 'redux';
import authReducer from './auth-reducer';

const allReducers = {
  auth: authReducer,
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;
