export const createReview = (review) => {
  return $.ajax({
    url: `/api/rooms/${review.roomId}/reviews`,
    method: 'post',
    data: {review: review}
  });
};

export const updateReview = (review) => {
  debugger
  return $.ajax({
    url: `/api/reviews/${review.reviewId}`,
    method: 'post',
    data: {review: review}
  });
};

export const deleteReview = (reviewId) => {
  return $.ajax({
    url: `/api/reviews/${reviewId}`,
    method: 'delete',
  });
};
