import * as RoomsAPIUtil from '../util/rooms_api_util';
import { fetching, fetchingComplete } from './ui_actions';

export const RECEIVE_ROOM = 'RECEIVE_ROOM';


export const receiveRoom = (response) => ({
  type: RECEIVE_ROOM,
  room: response.room,
  photos: response.photos,
  reviews: response.reviews,
  users: response.users
});

export const fetchRoomInfo = (roomId) => {
  return (dispatch) => {
    dispatch(fetching());
    RoomsAPIUtil.fetchRoomInfo(roomId).then((response) => {
      dispatch(fetchingComplete());
      dispatch(receiveRoom(response));
    });
  };
};
