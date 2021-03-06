
class BookingSeeds
  attr_reader :bookings

  def initialize(users, rooms)
    @users = users
    @rooms = rooms
    @bookings = []
  end

  def generateSeeds()
    @rooms.keys.each do |room_type|
      @rooms[room_type].each do |room_obj|
        createBooking(room_obj)
      end
    end
  end

  def createBooking(room_obj)
    (rand()*15).to_i.times do
      start_date = Date.today()+(rand()*120)
      renter_id =  @users[@users.keys.sample].sample[:user].id

      while (renter_id == room_obj[:room].host_id)
        renter_id =  @users[@users.keys.sample].sample[:user].id
      end

      curr_booking = Booking.create({
        renter_id: renter_id,
        room_id: room_obj[:room].id,
        start_date: start_date,
        end_date: start_date+(room_obj[:room].min_stay+rand()*5).to_i,
        adult_guests: (1+rand()*2).to_i,
        child_guests: (rand()*1).to_i,
        status: 'Approved'})

      @bookings.push(curr_booking)
    end
  end
end
