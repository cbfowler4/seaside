import { connect } from 'react-redux';
import Review from './review';
import { updateEditId } from '../../actions/ui_actions';
import { deleteReview } from '../../actions/review_actions';



const mapStateToProps = (state, ownProps) => {
  let review;
  let reviewId;
  let currentUser;

  if (ownProps.new) {
    review = {body: "", rating: 0};
    reviewId = null;
  } else {
    reviewId = ownProps.reviewId;
    review = state.entities.reviews[reviewId];
  }

  if (state.session.currentUser == null ) {
    currentUser = {id: null};
  } else {
    currentUser = state.session.currentUser;
  }

  return ({
    review,
    reviewId,
    currentUser,
    editId: state.ui.editId,
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
    updateEditId: (id) => dispatch(updateEditId(id)),
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(Review);
