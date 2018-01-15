import { connect } from 'react-redux';
import UserShow from './user_show';
import { withRouter } from 'react-router-dom';
import { fetchUserInfo } from '../../actions/user_show_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    userId: ownProps.match.params.userId,
    rooms: state.entities.rooms,
    photos: state.entities.photos,
    reviews: state.entities.reviews,
    users: state.entities.users,
    bookings: state.entities.bookings,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchUserInfo: (userId) => dispatch(fetchUserInfo(userId))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));
