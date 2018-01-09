
export const requestRoomBooking = (booking) => {
  return $.ajax({
    url: `/api/rooms/${booking.roomId}/bookings`,
    method: 'post',
    data: {booking: booking}
  });
};
