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

r2 = Room.create!({
  :host_id => demoUser.id,
  :title => 'Luxurious House Boat in the Cape',
            :address => 'Fish Docks',
            :lat => 43.133,
            :lng => -72.842,
            :price => 60,
            :max_guests => 6,
            :description => 'Boat comes with fishing gear, linens done every day',
            :beds => 4,
            :bathrooms => 2,
            :bedrooms => 3,
            :cancellation => "Strict",
            :min_stay => 4,
            :room_type => 'Full Ship'
  });

r3 = Room.create!({
  :host_id => demoUser.id,
  :title => 'Sail boat launch ready',
            :address => 'Hook Line Dock',
            :lat => 43.219,
            :lng => -72.2942,
            :price => 120,
            :max_guests => 2,
            :description => 'Rich mohagany and silk sheets, perfect for a weekend',
            :beds => 2,
            :bathrooms => 1,
            :bedrooms => 2,
            :cancellation => "Strict",
            :min_stay => 1,
            :room_type => 'Full Ship'
  });

r4 = Room.create!({
  :host_id => demoUser.id,
  :title => 'Four person sail boat',
            :address => '42 Crescent drive',
            :lat => 43.04,
            :lng => -71.9942,
            :price => 300,
            :max_guests => 5,
            :description => 'Please enjoy the spectacular views on our boat',
            :beds => 2,
            :bathrooms => 1,
            :bedrooms => 2,
            :cancellation => "Strict",
            :min_stay => 1,
            :room_type => 'Full Ship'
  });
