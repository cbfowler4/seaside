import { OPEN_LOGIN, OPEN_SIGNUP, CLOSE_AUTH } from '../actions/ui_actions';
import { merge } from 'lodash';

const defaultState = {
  login_modal: false,
  signup_modal: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case OPEN_LOGIN:
      return merge({}, state, {login_modal: true});
    case OPEN_SIGNUP:
      return merge({}, state, {signup_modal: true});
    case CLOSE_AUTH:
      return merge({}, state, defaultState);
    default:
      return state;
  }
};
