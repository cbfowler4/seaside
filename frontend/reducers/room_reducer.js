import { RECEIVE_ROOMS } from '../actions/room_index_actions.js';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ROOMS:
      return action.rooms;
    default:
      return state;
  }
};
