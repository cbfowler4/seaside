import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const defaultState = {currentUser: null};

const sessionReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {currentUser: action.currentUser});
    case LOGOUT_CURRENT_USER:
      return Object.assign({}, state, {currentUser: action.currentUser});
    default:
      return state;
  }
};

export default sessionReducer;
