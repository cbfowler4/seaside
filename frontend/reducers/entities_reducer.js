import { combineReducers } from 'redux';
import roomReducer from './room_reducer';
import photosReducer from './photos_reducer';
import reviewsReducer from './reviews_reducer';

const entitiesReducer = combineReducers({
  rooms: roomReducer,
  photos: photosReducer,
  reviews: reviewReducer
});

export default entitiesReducer;
