import * as RoomsAPIUtil from '../util/rooms_api_util';


export const RECEIVE_ROOM = 'RECEIVE_ROOM_SHOW';


export const receiveRoom = (response) => ({
  type: RECEIVE_ROOM,
  room: response.room,
  photos: response.photos
});

export const fetchRoomInfo = (roomId) => {
  return (dispatch) => {
    RoomsAPIUtil.fetchRoomInfo(roomId).then((response) => {
      dispatch(receiveRoom(response));
    });
  };
};
