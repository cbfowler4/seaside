import { connect } from 'react-redux';
import UserShow from './user_show';
import { withRouter } from 'react-router-dom';
import { fetchUserInfo } from '../../actions/user_show_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    userId: ownProps.match.params.userId
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchUserInfo: (userId) => dispatch(fetchUserInfo(userId))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));
