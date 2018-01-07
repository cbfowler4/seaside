
export const fetchRooms = (filters) => {
  return $.ajax({
    url: '/api/rooms',
    type: 'get',
    data: {filters}
  });
};

export const fetchRoomInfo = (roomId) => {
  return $.ajax({
    url: `/api/rooms/${roomId}`,
    method: 'get'
  });
};
