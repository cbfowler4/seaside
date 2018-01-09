import { connect } from 'react-redux';
import Booking from './booking';

const mapStateToProps = (state, ownProps) => {
  return ({
    room: ownProps.room
  });
};

const mapDispatchToProps = dispatch => {
  return ({

  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
