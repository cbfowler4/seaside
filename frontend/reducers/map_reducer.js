import { UPDATE_MAP_CENTER } from '../actions/map_actions';


const defaultState = {
  center: {lat: 43.213, lng: -72.2342 }
};

export default (state = defaultState, action ) => {
  switch (action.type) {
    case UPDATE_MAP_CENTER:
      return merge({}, state, {center: action.center});
    default:
      return state;
  }
};
