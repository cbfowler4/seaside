import { RECEIVE_ROOM } from '../actions/room_show_actions.js';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ROOM:
      return merge({}, state, action.users);
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.currentUser);
    default:
      return state;
  }
};
