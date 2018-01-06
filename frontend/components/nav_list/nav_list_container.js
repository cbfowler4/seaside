import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { fetchRooms } from '../../actions/room_index_actions';
import NavList from './nav_list';
import { openLogin, openSignup } from '../../actions/ui_actions';
import { receiveMapCenter } from '../../actions/map_actions';



const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openLogin: () => dispatch(openLogin()),
    openSignup: () => dispatch(openSignup()),
    fetchRooms: () => dispatch(fetchRooms()),
    receiveMapCenter: (center) => dispatch(receiveMapCenter(center))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavList));
