import { RECEIVE_ROOM } from '../actions/room_show_actions';
import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions.js';
import { RECEIVE_USER } from '../actions/user_show_actions';
import { merge } from 'lodash';

const reviewsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ROOM:
      return merge({}, state, action.reviews);
    case RECEIVE_REVIEW:
      return merge({}, state, action.review);
    case REMOVE_REVIEW:
      let newState = merge({}, state);
      delete newState[Object.keys(action.review)[0]];
      return newState;
    case RECEIVE_USER:
      return merge({}, state, action.reviews);
    default:
      return state;
  }
};

export default reviewsReducer;
