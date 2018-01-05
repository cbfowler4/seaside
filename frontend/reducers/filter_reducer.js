import { combineReducers } from 'redux';
import { RECEIVE_BOUNDS } from '../actions/room_index_actions';
import { merge } from 'lodash';

import {
  RECEIVE_GUESTS,
  CLEAR_ALL_FILTERS,
  CLEAR_GUEST_FILTER,
  RECEIVE_PRICE,
  CLEAR_PRICE_FILTER } from '../actions/filter_actions';


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

const defaultPrice = {min: 0, max: 1000};

const priceReducer = (state = defaultPrice, action) => {
  switch (action.type) {
    case RECEIVE_PRICE:
      return action.price;
    case CLEAR_PRICE_FILTER:
      return defaultPrice;
    case CLEAR_ALL_FILTERS:
      return defaultPrice;
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
  guests: guestReducer,
  price: priceReducer
});
