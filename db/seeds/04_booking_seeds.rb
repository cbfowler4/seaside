
class BookingSeeds
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
    (rand()*5).to_i.times do
      start_date = Date.today()+(rand()*90)
      @bookings.push(Booking.create({
        renter_id: @users[@users.keys.sample][0][:user].id,
        room_id: room_obj[:room].id,
        start_date: start_date,
        end_date: start_date+(rand()*5).to_i,
        adult_guests: (rand()*3).to_i,
        child_guests: (rand()*1).to_i
        }))
    end
  end
end
