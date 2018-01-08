import { combineReducers } from 'redux';
import roomReducer from './room_reducer';
import photosReducer from './photos_reducer';

const entitiesReducer = combineReducers({
  rooms: roomReducer,
  photos: photosReducer
});

export default entitiesReducer;
