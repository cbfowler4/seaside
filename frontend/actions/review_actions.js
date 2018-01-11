import * as ReviewAPIUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

export const removeReview = (response) => {
  return ({
    type: REMOVE_REVIEW,
    review: response.review,
    room: response.room
  });
};

export const receiveReview = (response) => {
  return ({
    type: RECEIVE_REVIEW,
    review: response.review,
    room: response.room
  });
};

export const createReview = (review) => {
  return (dispatch) => {
    ReviewAPIUtil.createReview(review).then((response) => {
      dispatch(receiveReview(response));
    });
  };
};

export const deleteReview = (reviewId) => {
  return (dispatch) => {
    ReviewAPIUtil.deleteReview(reviewId).then((response) => {
      dispatch(removeReview(response));
    });
  };
};
