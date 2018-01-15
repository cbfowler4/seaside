import { combineReducers } from 'redux';
import roomReducer from './room_reducer';
import photosReducer from './photos_reducer';
import reviewsReducer from './reviews_reducer';
import usersReducer from './users_reducer';
import bookingsReducer from './bookings_reducer';

const entitiesReducer = combineReducers({
  rooms: roomReducer,
  photos: photosReducer,
  reviews: reviewsReducer,
  users: usersReducer,
  bookings: bookingsReducer
});

export default entitiesReducer;
