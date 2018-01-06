import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import NavList from './nav_list';
import { openLogin, openSignup } from '../../actions/ui_actions';



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
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavList));
