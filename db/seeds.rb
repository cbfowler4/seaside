# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#

User.destroy_all
Room.destroy_all

demoUser = User.create!({
  email: "guest",
  fname: "Bryan",
  lname: "Fowler",
  password: "password"})


r1 = Room.create!({
  :host_id => demoUser.id,
  :title => 'Beautiful 1800s navy vessel',
            :address => '123 fake street',
            :lat => 43.213,
            :lng => -72.2342,
            :price => 45,
            :max_guests => 3,
            :description => 'Ship from the 1800s with ample space and plenty of natural light',
            :beds => 2,
            :bathrooms => 1,
            :bedrooms => 1,
            :cancellation => "Strict",
            :min_stay => 2,
            :room_type => 'Full Ship'
  });
