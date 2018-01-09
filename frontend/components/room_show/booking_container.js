import { connect } from 'react-redux';
import Booking from './booking';
import { requestBooking } from '../../actions/booking_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    room: ownProps.room,
    currentUser: state.session.currentUser,
    errors: state.errors.booking,
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    requestBooking: (booking) => dispatch(requestBooking(booking))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
