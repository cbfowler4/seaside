
# p1 = Photo.create!({
#   title: "cover",
#   image: File.open('app/assets/images/artem-verbo-55904.jpg'),
#   imageable: demoUser})

# USER_TYPES = [:couples, :males, :females]
# BOAT_TYPES = [:sailboats, :motorboats, :yachts ]

class PhotoSeeds
  def initialize(users, rooms)
    @users = users
    @rooms = rooms
    @photos = []
  end

  def generateSeeds()
    @users.keys.each do |user_type|
      @users[user_type].each do |user_obj|
        @photos.push(Photo.create!({
          title: "#{user_obj[:user].email}_photo",
          image: open(user_obj[:picture]),
          imageable: user_obj[:user]
          }))
      end
    end

    @rooms.keys.each do |room_type|
      @rooms[room_type].each do |room_obj|
        @photos.push(Photo.create!({
          title: "#{room_obj[:room].id}_main_photo",
          image: open(room_obj[:picture]),
          imageable: room_obj[:room]
          }))
      end
    end
  end
end
