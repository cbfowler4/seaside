
import { RECEIVE_GUESTS, CLEAR_ALL_FILTERS } from '../actions/filter_actions';

const defaultState = {};

const guestReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_GUESTS:
      debugger
      return action.guests;
    case CLEAR_ALL_FILTERS:
      return defaultState;
    default:
      return state;
  }
};

export default guestReducer;
