import * as RoomsAPIUtil from '../util/rooms_api_util';


export const RECEIVE_ROOM = 'RECEIVE_ROOM_SHOW';


export const receiveRoom = (room) => ({
  type: RECEIVE_ROOM,
  room
});

export const fetchRoomInfo = (roomId) => {
  return (dispatch) => {
    RoomsAPIUtil.fetchRoomInfo(roomId).then((response) => {
      dispatch(receiveRoom(response));
    });
  };
};
