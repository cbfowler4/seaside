import * as RoomsAPIUtil from '../util/rooms_api_util';
import { closeModal, fetchingComplete, fetching } from './ui_actions';

export const RECEIVE_ROOMS = "RECEIVE_ROOMS";
export const RECEIVE_BOUNDS = "RECEIVE_BOUNDS";

export const receiveRooms = (response) => {
  return ({
    type: RECEIVE_ROOMS,
    rooms: response.rooms,
    photos: response.photos
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
    dispatch(closeModal());
    dispatch(fetching());
    return (RoomsAPIUtil.fetchRooms(filters).then((response) => {
      dispatch(fetchingComplete());
      dispatch(receiveRooms(response));
    }));
  };
};
