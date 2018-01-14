import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = (response) => {
  return({
    type: RECEIVE_USER,
    user: response.user
  });
};

export const fetchUserInfo = (userId) => {
  return (dispatch) => {
    return UserAPIUtil.fetchUserInfo(userId).then( (response) => {
      debugger
      dispatch(receiveUser(response));
    });
  };
};
