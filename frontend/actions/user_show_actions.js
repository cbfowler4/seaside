import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = (response) => {
  return({
    type: RECEIVE_USER,
    users: response.users,
    reviews: response.reviews,
    photos: response.photos,
    bookings: response.bookings,
    rooms: response.rooms
  });
};

export const fetchUserInfo = (userId) => {
  return (dispatch) => {
    return UserAPIUtil.fetchUserInfo(userId).then( (response) => {
      dispatch(receiveUser(response));
    });
  };
};
