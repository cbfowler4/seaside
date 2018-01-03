import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchRooms } from '../../actions/room_index_actions';
import NavList from './nav_list';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchRooms: () => dispatch(fetchRooms())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavList);
