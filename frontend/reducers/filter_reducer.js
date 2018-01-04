import { combineReducers } from 'redux';
import boundsReducer from './bounds_reducer';

export default combineReducers({
  bounds: boundsReducer
});
