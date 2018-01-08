u1 = User.first
r1 = Room.first
d1 = Date.parse('21th feb 2018')
d2 = Date.parse('20th feb 2018')
Booking.create!({renter_id: u1.id, room_id: r1.id, start_date: d1, end_date: d2})
