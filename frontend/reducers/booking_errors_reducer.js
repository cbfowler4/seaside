import {
  RECEIVE_BOOKING_ERRORS,
  RECEIVE_BOOKING_SUCCESS,
  CLEAR_BOOKING_ERRORS,
  BOOKING_CHANGED
 } from '../actions/booking_actions';

const bookingErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_BOOKING_ERRORS:
      return action.errors;
    case RECEIVE_BOOKING_SUCCESS:
      return [];
    case CLEAR_BOOKING_ERRORS:
      return [];
    case BOOKING_CHANGED:
      return [];
    default:
      return state;
  }
};

export default bookingErrorsReducer;
