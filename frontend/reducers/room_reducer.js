import { RECEIVE_ROOMS } from '../actions/room_index_actions.js';
import { RECEIVE_ROOM } from '../actions/room_show_actions.js';
import { RECEIVE_REVIEW } from '../actions/review_actions.js';

import { merge } from 'lodash';

window.merge = merge;

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ROOMS:
      return merge({}, action.rooms);
    case RECEIVE_ROOM:
      return merge({}, state, action.room);
    case RECEIVE_REVIEW:
      return merge({}, state, action.room);
    default:
      return state;
  }
};
