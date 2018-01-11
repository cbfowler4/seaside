import { connect } from 'react-redux';
import Booking from './booking';
import { requestBooking, bookingChanged } from '../../actions/booking_actions';
import { openSignup } from '../../actions/ui_actions';
import { receiveErrors } from '../../actions/booking_actions';


const mapStateToProps = (state, ownProps) => {
  return ({
    room: ownProps.room,
    currentUser: state.session.currentUser,
    errors: state.errors.booking,
    booked: state.ui.booked
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    requestBooking: (booking) => dispatch(requestBooking(booking)),
    openSignup: () => dispatch(openSignup()),
    receiveErrors: (errors) => dispatch(receiveErrors(errors)),
    bookingChanged: () => dispatch(bookingChanged())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
