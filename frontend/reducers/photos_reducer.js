import { RECEIVE_ROOMS } from '../actions/room_index_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ROOM } from '../actions/room_show_actions';
import { merge } from 'lodash';

const photosReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ROOM:
      return merge({}, state, action.photos);
    case RECEIVE_ROOMS:
      return merge({}, state, action.photos);
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.photos);
    default:
      return state;
  }
};

export default photosReducer;
