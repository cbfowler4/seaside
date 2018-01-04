export const UPDATE_MAP_CENTER = 'UPDATE_MAP_CENTER';

export const receiveMapCenter = (center) => {
  return ({
    type: UPDATE_MAP_CENTER,
    center
  });
};
