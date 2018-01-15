import { RECEIVE_ROOM } from '../actions/room_show_actions.js';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_show_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ROOM:
      return merge({}, state, action.users);
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.currentUser);
    case RECEIVE_USER:
      return merge({}, state, action.users);
    default:
      return state;
  }
};
