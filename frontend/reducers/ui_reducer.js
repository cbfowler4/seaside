import {
  OPEN_LOGIN,
  OPEN_SIGNUP,
  CLOSE_MODAL,
  OPEN_FILTER,
  FETCHING,
  FETCHING_COMPLETE } from '../actions/ui_actions';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { BOOKING_CHANGED, RECEIVE_BOOKING_SUCCESS } from '../actions/booking_actions';

import { merge } from 'lodash';

const defaultState = {
  login_modal: false,
  signup_modal: false,
  filter_modal: null,
  isFetching: false,
  booked: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case OPEN_LOGIN:
      return merge({}, defaultState, {login_modal: true});
    case OPEN_SIGNUP:
      return merge({}, defaultState, {signup_modal: true});
    case OPEN_FILTER:
      return merge({}, defaultState, {filter_modal: action.filterType});
    case CLOSE_MODAL:
      return merge({}, state, defaultState);
    case RECEIVE_CURRENT_USER:
      return merge({}, state, defaultState);
    case FETCHING:
      return merge({}, state, {isFetching: true});
    case FETCHING_COMPLETE:
      return merge({}, state, {isFetching: false});
    case BOOKING_CHANGED:
      return merge({}, state, {booked: false});
    case RECEIVE_BOOKING_SUCCESS:
      return merge({}, state, {booked: true});
    default:
      return state;
  }
};
