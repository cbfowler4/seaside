import { connect } from 'react-redux';

import Review from './review';

const mapStateToProps = (state, ownProps) => {
  return ({
    user: state.entities.user[ownProps.userId],
    review: state.entities.rooms[ownProps.roomId]
  });
};

const mapDispatchToProps = dispatch => {
  return ({

  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Review);
