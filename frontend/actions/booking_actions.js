import * as BookingsAPIUtil from '../util/bookings_api_util';
import moment from 'moment';

export const requestBooking = (booking) => {
  booking.startDate = booking.startDate.format('MM/DD/YYYY');
  booking.endDate = booking.endDate.format('MM/DD/YYYY');
  booking.currentUser = booking.currentUser.id;
  return (dispatch) => {
    return BookingsAPIUtil.requestRoomBooking(booking).then((console.log('success')));
  };
};
