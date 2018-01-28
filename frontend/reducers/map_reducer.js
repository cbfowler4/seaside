import { UPDATE_MAP_CENTER } from '../actions/map_actions';
import { merge } from 'lodash';


const defaultState = {
  center: {lat: 40.752, lng: -73.9812 }
};

export default (state = defaultState, action ) => {
  switch (action.type) {
    case UPDATE_MAP_CENTER:
      return merge({}, state, {center: action.center});
    default:
      return state;
  }
};
