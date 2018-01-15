import { RECEIVE_USER } from '../actions/user_show_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, state, action.bookings);
    default:
      return state;
  }
};
