import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import uiReducer from './ui_reducer';
import roomReducer from './room_reducer';

const rootReducer = combineReducers({
  rooms: roomReducer,
  session: sessionReducer,
  errors: errorsReducer,
  ui: uiReducer
});

export default rootReducer;
