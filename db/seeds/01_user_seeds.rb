require 'faker'

MALE_IMAGES = ['http://s3.amazonaws.com/aa-seaside-dev/seeds/users/males/35mm-270922.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/users/males/ana-maria-nichita-417521.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/users/males/brooke-cagle-224815.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/users/males/jeslyn-chanchaleune-349125.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/users/males/joseph-gonzalez-399972.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/users/males/keletso-rabalao-384670.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/users/males/mohammad-faruque-190945.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/users/males/sabrina-may-341053.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/users/males/sam-burriss-254311.jpg'
]

FEMALE_IMAGES = ['http://s3.amazonaws.com/aa-seaside-dev/seeds/users/females/allef-vinicius-152932.jpg',
'http://s3.amazonaws.com/aa-seaside-dev/seeds/users/females/cristian-newman-297970.jpg',
'http://s3.amazonaws.com/aa-seaside-dev/seeds/users/females/enis-yavuz-365453.jpg',
'http://s3.amazonaws.com/aa-seaside-dev/seeds/users/females/eye-for-ebony-402231.jpg',
'http://s3.amazonaws.com/aa-seaside-dev/seeds/users/females/hannah-busing-309662.jpg',
'http://s3.amazonaws.com/aa-seaside-dev/seeds/users/females/hisu-lee-30029.jpg',
'http://s3.amazonaws.com/aa-seaside-dev/seeds/users/females/michael-dam-258165.jpg']

COUPLE_IMAGES = ['http://s3.amazonaws.com/aa-seaside-dev/seeds/users/couples/artem-beliaikin-413155.jpg',
'http://s3.amazonaws.com/aa-seaside-dev/seeds/users/couples/carly-rae-hobbins-331349.jpg',
'http://s3.amazonaws.com/aa-seaside-dev/seeds/users/couples/jon-tyson-353597.jpg',
'http://s3.amazonaws.com/aa-seaside-dev/seeds/users/couples/priscilla-du-preez-318422.jpg',
'http://s3.amazonaws.com/aa-seaside-dev/seeds/users/couples/suzana-sousa-280169.jpg'
]

CITY_STATES = [
  ['Los Angeles', 'California'],
  ['San Diego', 'California'],
  ['San Francisco', 'California'],
  ['Sacramento', 'California'],
  ['Brooklyn', 'New York'],
  ['Queens', 'New York'],
  ['Staten Island', 'New York'],
  ['Manhattan', 'New York'],
  ['Orlando', 'Florida'],
  ['Miami', 'Florida'],
  ['West Palm Beach', 'Florida'],
  ['London', 'England'],
  ['Tokyo', 'Japan'],
  ['Cape Town', 'South Africa'],
  ['Hartford', 'Connecticut'],
]

class UserSeeds
  attr_reader :users

  def initialize()
    @users = {couples: [], males: [], females: []};
  end

  def generateSeeds()
    @users[:males].push({
        user:
          User.create!({
          email: "guest",
          fname: "Bryan",
          lname: "Fowler",
          password: "password",
          city: 'Hartford',
          state: 'Connecticut'}),

          picture: MALE_IMAGES.sample
      })

    MALE_IMAGES.each do |person|
      city_state = CITY_STATES.sample
      @users[:males].push({
            user: User.create!({
              email: Faker::Internet.email,
              fname: Faker::Name.first_name,
              lname: Faker::Name.last_name,
              password: "password",
              city: city_state[0],
              state: city_state[1]}),

            picture: person})
    end

    FEMALE_IMAGES.each do |person|
      city_state = CITY_STATES.sample
      @users[:females].push({
            user: User.create!({
              email: Faker::Internet.email,
              fname: Faker::Name.first_name,
              lname: Faker::Name.last_name,
              password: "password",
              city: city_state[0],
              state: city_state[1]}),

            picture: person})
    end


    COUPLE_IMAGES.each do |person|
      city_state = CITY_STATES.sample
      @users[:couples].push({
            user: User.create!({
              email: Faker::Internet.email,
              fname: "#{Faker::Name.first_name} & #{Faker::Name.first_name}",
              lname: Faker::Name.last_name,
              password: "password",
              city: city_state[0],
              state: city_state[1]}),

            picture: person})
    end

  end

end
