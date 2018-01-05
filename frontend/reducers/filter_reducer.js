import { combineReducers } from 'redux';
import { RECEIVE_BOUNDS } from '../actions/room_index_actions';
import { RECEIVE_GUESTS, CLEAR_ALL_FILTERS, CLEAR_GUEST_FILTER } from '../actions/filter_actions';
import { merge } from 'lodash';


const defaultGuestState = {adult: 1, child: 0};

const guestReducer = (state = defaultGuestState, action) => {
  switch (action.type) {
    case RECEIVE_GUESTS:
      return action.guests;
    case CLEAR_GUEST_FILTER:
      return defaultGuestState;
    case CLEAR_ALL_FILTERS:
      return defaultGuestState;
    default:
      return state;
  }
};


const defaultBoundsState = {
};

const boundsReducer = (state = defaultBoundsState, action ) => {
  switch (action.type) {
    case RECEIVE_BOUNDS:
      return merge({}, state, action.bounds);
    default:
      return state;
  }
};


export const filterReducer = combineReducers({
  bounds: boundsReducer,
  guests: guestReducer
});
