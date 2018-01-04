
import { UPDATE_MAP_CENTER } from '../actions/map_actions';
import { RECEIVE_BOUNDS } from '../actions/room_index_actions';
import { merge } from 'lodash';

const defaultState = {
  center: {lat: 43.213, lng: -72.2342 }
};

export default (state = defaultState, action ) => {
  switch (action.type) {
    case UPDATE_MAP_CENTER:
      return merge({}, state, {center: action.center});
    case RECEIVE_BOUNDS:
      return merge({}, state, action.bounds);
    default:
      return state;
  }
};
