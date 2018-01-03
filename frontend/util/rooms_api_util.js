
export const fetchRooms = (filters) => {
  return $.ajax({
    url: '/api/rooms',
    type: 'get',
    data: {filters}
  });
};
