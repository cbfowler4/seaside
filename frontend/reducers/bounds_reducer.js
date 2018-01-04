
import { RECEIVE_BOUNDS } from '../actions/room_index_actions';
import { merge } from 'lodash';

const defaultState = {
};

export default (state = defaultState, action ) => {
  switch (action.type) {
    case RECEIVE_BOUNDS:
      return merge({}, state, action.bounds);
    default:
      return state;
  }
};
