import { RECEIVE_ROOMS } from '../actions/room_index_actions.js';
import { RECEIVE_ROOM } from '../actions/room_show_actions.js';
import { merge } from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ROOMS:
      debugger
      return action.rooms;
    case RECEIVE_ROOM:
      debugger 
      return merge({}, state, action.room);
    default:
      return state;
  }
};
