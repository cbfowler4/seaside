import * as BookingsAPIUtil from '../util/bookings_api_util';
import moment from 'moment';

export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';
export const RECEIVE_BOOKING_SUCCESS = 'RECEIVE_BOOKING_SUCCESS';
export const CLEAR_BOOKING_ERRORS = 'CLEAR_BOOKING_ERRORS';
export const BOOKING_CHANGED = 'BOOKING_CHANGED';

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_BOOKING_ERRORS,
    errors
  };
};

export const bookingChanged = () => {
  return {
    type: BOOKING_CHANGED
  };
};

export const receiveSuccessfulBooking = (response) => {
  return {
    type: RECEIVE_BOOKING_SUCCESS,
    room: response.room
  };
};


export const requestBooking = (booking) => {
  booking.startDate = booking.startDate.format('YYYY-MM-DD');
  booking.endDate = booking.endDate.format('YYYY-MM-DD');
  booking.currentUser = booking.currentUser.id;
  return (dispatch) => {
    return (BookingsAPIUtil.requestRoomBooking(booking).then((response) =>
     {
       dispatch(receiveSuccessfulBooking(response));
     },
    (errors) => {
      dispatch(receiveErrors(errors.responseJSON));
    }));
  };
};
