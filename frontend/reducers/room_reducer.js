import { RECEIVE_ROOMS } from '../actions/room_index_actions.js';
import { RECEIVE_ROOM } from '../actions/room_show_actions.js';
import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions.js';
import { RECEIVE_BOOKING_SUCCESS } from '../actions/booking_actions';

import { merge } from 'lodash';

window.merge = merge;

export default (state = {}, action) => {
  let newState;
  let roomId;
  switch (action.type) {
    case RECEIVE_ROOMS:
      return merge({}, action.rooms);
    case RECEIVE_ROOM:
      return merge({}, state, action.room);
    case RECEIVE_REVIEW:
      return merge({}, state, action.room);
    case REMOVE_REVIEW:
      newState = merge({}, state);
      roomId = Object.keys(action.room)[0];

      newState[roomId].reviewerIds = action.room[roomId].reviewerIds;
      newState[roomId].reviewIds = action.room[roomId].reviewIds;

      return newState;
    case RECEIVE_BOOKING_SUCCESS:
      newState = merge({}, state);
      roomId = Object.keys(action.room)[0];
      newState[roomId].renterIds = action.room[roomId].renterIds;
      return newState;
    default:
      return state;
  }
};
