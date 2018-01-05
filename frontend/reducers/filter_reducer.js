import { combineReducers } from 'redux';
import boundsReducer from './bounds_reducer';
import guestReducer from './guest_reducer';

export default combineReducers({
  bounds: boundsReducer,
  guest: guestReducer
});
