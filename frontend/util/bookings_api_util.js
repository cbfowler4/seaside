
export const requestRoomBooking = (booking) => {
  debugger
  return $.ajax({
    url: `/api/rooms/${booking.roomId}/bookings`,
    method: 'post',
    data: {booking: booking}
  });
};
