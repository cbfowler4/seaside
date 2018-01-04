import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import uiReducer from './ui_reducer';
import entitiesReducer from './entities_reducer';
import filterReducer from './filter_reducer';
import mapReducer from './map_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  filters: filterReducer,
  map: mapReducer,
  session: sessionReducer,
  errors: errorsReducer,
  ui: uiReducer
});

export default rootReducer;
