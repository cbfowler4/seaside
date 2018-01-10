import { RECEIVE_ROOM } from '../actions/room_show_actions';
import { merge } from 'lodash';

const reviewsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ROOM:
      debugger
      return merge({}, state, action.reviews);
    default:
      return state;
  }
};

export default reviewsReducer;
