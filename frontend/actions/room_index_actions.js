import * as RoomsAPIUtil from '../util/rooms_api_util';

export const RECEIVE_ROOMS = "RECEIVE_ROOMS";
export const RECEIVE_BOUNDS = "RECEIVE_BOUNDS";

export const receiveRooms = (rooms) => {
  return ({
    type: RECEIVE_ROOMS,
    rooms
  });
};

export const receiveBounds = (bounds) => {
  return ({
    type: RECEIVE_BOUNDS,
    bounds
  });
};

export const fetchRooms = (filters) => {
  return (dispatch) => {
    return (RoomsAPIUtil.fetchRooms(filters).then((rooms) => {
      dispatch(receiveRooms(rooms));
    }));
  };
};
