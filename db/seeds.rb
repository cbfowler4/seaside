# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#

# u1 = User.new({
#   email: "bryan@gmail.com",
#   fname: "bryan",
#   lname: "fowler",
#   pwd_digest: "asdfas",
#   session_token: "asdfs"});

# u2 = User.new({
#   email: "bryan2@gmail.com",
#   fname: "bryan",
#   lname: "fowler",
#   pwd_digest: "asdfas",
#   session_token: "asdfs"});

demoUser = User.create!({
  email: "guest",
  fname: "Bryan",
  lname: "Fowler",
  password: "password"})
