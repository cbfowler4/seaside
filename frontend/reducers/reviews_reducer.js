import { RECEIVE_ROOM } from '../actions/room_show_actions';
import { RECEIVE_REVIEW } from '../actions/review_actions.js';

import { merge } from 'lodash';

const reviewsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ROOM:
      return merge({}, state, action.reviews);
    case RECEIVE_REVIEW:
      debugger
      return merge({}, state, action.review);
    default:
      return state;
  }
};

export default reviewsReducer;
