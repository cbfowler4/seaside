import { connect } from 'react-redux';
import Review from './review';
import { updateEditId } from '../../actions/ui_actions';
import { deleteReview } from '../../actions/review_actions';



const mapStateToProps = (state, ownProps) => {
  return ({
    review: state.entities.reviews[ownProps.reviewId],
    reviewId: ownProps.reviewId,
    currentUser: state.session.currentUser,
    editId: state.ui.editIds
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
    updateEditId: (id) => dispatch(updateEditId(id)),
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(Review);
