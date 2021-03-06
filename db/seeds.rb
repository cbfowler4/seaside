# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#
require_relative './seeds/01_user_seeds'
require_relative './seeds/02_room_seeds'
require_relative './seeds/03_photo_seeds'
require_relative './seeds/04_booking_seeds'
require_relative './seeds/05_review_seeds'

User.destroy_all
Room.destroy_all
Photo.destroy_all
Booking.destroy_all
Review.destroy_all

user_seeds = UserSeeds.new()
user_seeds.generateSeeds

room_seeds = RoomSeeds.new(user_seeds.users)
room_seeds.generateSeeds

photo_seeds = PhotoSeeds.new(user_seeds.users, room_seeds.rooms)
photo_seeds.generateSeeds

booking_seeds = BookingSeeds.new(user_seeds.users, room_seeds.rooms)
booking_seeds.generateSeeds


review_seeds = ReviewSeeds.new(booking_seeds.bookings)
review_seeds.generateSeeds
