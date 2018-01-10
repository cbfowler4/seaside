import { RECEIVE_ROOM } from '../actions/room_show_actions.js';
import { merge } from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ROOM:
      return merge({}, state, action.users);
    default:
      return state;
  }
};
