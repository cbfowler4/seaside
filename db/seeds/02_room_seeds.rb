
SAIL_BOATS = ['http://s3.amazonaws.com/aa-seaside-dev/seeds/boats/sailboats/autumn-mott-8441.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/boats/sailboats/benjamin-lambert-318669.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/boats/sailboats/daniel-olah-317207.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/boats/sailboats/david-dibert-413640.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/boats/sailboats/f-s-298401.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/boats/sailboats/jonathan-smith-142027.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/boats/sailboats/joshua-newton-216966.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/boats/sailboats/mateo-stepniak-40986.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/boats/sailboats/nick-karvounis-43532.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/boats/sailboats/stephen-crowley-110330.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/boats/sailboats/tatiana-zhukova-123057.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/boats/sailboats/teodor-drobota-378428.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/boats/sailboats/tobias-fischer-176352.jpg']

MOTOR_BOATS = ['http://s3.amazonaws.com/aa-seaside-dev/seeds/boats/motorboats/alasdair-elmes-206402.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/boats/motorboats/benjamin-voros-314204.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/boats/motorboats/callum-chapman-93876.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/boats/motorboats/drew-coffman-395127.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/boats/motorboats/garrett-parker-118937.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/boats/motorboats/jesse-orrico-93200.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/boats/motorboats/kevin-hou-39963.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/boats/motorboats/martin-wessely-212.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/boats/motorboats/romanos-senikidis-36213.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/boats/motorboats/s-ross-morris-62958.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/boats/motorboats/saksham-gangwar-158955.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/boats/motorboats/yap-chin-kuan-111666.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/boats/motorboats/zachary-young-368679.jpg']

YACHTS = ['http://s3.amazonaws.com/aa-seaside-dev/seeds/boats/yachts/ahmed-saffu-262382.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/boats/yachts/boat-1613226_960_720.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/boats/yachts/boat-1615677_960_720.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/boats/yachts/john-such-493469.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/boats/yachts/luxury-yacht-1698751_960_720.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/boats/yachts/luxury-yacht-2431314_960_720.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/boats/yachts/luxury-yacht-2431471_960_720.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/boats/yachts/pablo-garcia-saldana-44336.jpg',
  'http://s3.amazonaws.com/aa-seaside-dev/seeds/boats/yachts/taduuda-38507.jpg']

LAT_LNG = [
  {lat: 43.213, lng: -72.2342},
  {lat: 38.213, lng: -78.2342},
  {lat: 29.213, lng: -86.2342},
  {lat: 33.701, lng: -117.885},
  {lat: 22.813, lng: -82.2342}
]

ADJECTIVES = [ 'Beautiful', 'Amazing', 'Spectacular', 'Cozy', 'Comfortable', 'Welcoming', 'Chill', "Old and rustic"]
VERBS = ["all aboard!", "please join us!", "perfect for a weekend", "bring your shorts!", "anchors away!", "we have lobster", "this is a great value! Trust us"]
CANCELLATION = ["Strict", "Moderate"]

USER_TYPES = [:couples, :males, :females]
BOAT_TYPES = [:sailboats, :motorboats, :yachts ]

class RoomSeeds
  attr_reader :rooms
  def initialize(users)
    @rooms = {sailboats: [], motorboats: [], yachts: []}
    @users = users
  end

  def generateSeeds()
    2.times do
      SAIL_BOATS.each do |boat|
        @rooms[:sailboats].push({ room:
              Room.create!({
              :host_id => @users[USER_TYPES.sample].sample[:user].id,
              :title => "#{ADJECTIVES.sample} sail boat, #{VERBS.sample}",
              :address => Faker::Address.street_address,
              :lat => (LAT_LNG.sample[:lat]+(5*rand())+(1*rand())),
              :lng => (LAT_LNG.sample[:lng]+(5*rand())+(1*rand())),
              :price => (rand()*400).to_i,
              :max_guests => (rand()*8.to_i),
              :description => 'Ship from the 1800s with ample space and plenty of natural light.
               Please stay on our boat with us. We can take you across the marina or to some islands nearby.
                There are awesome places for swimming and fishing as well. Sometimes we see dolphins on the port side of the vessel.
                My father was a sailor in the Navy so I am an experience captain!. The sunsets are also beautiful and
                 we would love for you to join us',
              :beds => (rand()*8.to_i),
              :bathrooms => (rand()*3.to_i),
              :bedrooms => (rand()*5.to_i),
              :cancellation => CANCELLATION.sample,
              :min_stay => (rand()*2).to_i,
              :room_type => 'Sail boat'
              }),
              picture: boat
            })
        end

      MOTOR_BOATS.each do |boat|
        @rooms[:motorboats].push({ room:
              Room.create!({
              :host_id => @users[USER_TYPES.sample].sample[:user].id,
              :title => "#{ADJECTIVES.sample} motor boat, all aboard!",
              :address => Faker::Address.street_address,
              :lat => (LAT_LNG.sample[:lat]+(rand()/100)),
              :lng => (LAT_LNG.sample[:lng]+(rand()/100)),
              :price => (rand()*400).to_i,
              :max_guests => (rand()*8.to_i),
              :description => 'Ship from the 1800s with ample space and plenty of natural light.
               Please stay on our boat with us. We can take you across the marina or to some islands nearby.
                There are awesome places for swimming and fishing as well. Sometimes we see dolphins on the port side of the vessel.
                My father was a sailor in the Navy so I am an experience captain!. The sunsets are also beautiful and
                 we would love for you to join us',
              :beds => (rand()*8.to_i),
              :bathrooms => (rand()*3.to_i),
              :bedrooms => (rand()*5.to_i),
              :cancellation => CANCELLATION.sample,
              :min_stay => (rand()*4).to_i,
              :room_type => 'Motor boat'
            }),
            picture: boat
          })

        end

      YACHTS.each do |boat|
        @rooms[:yachts].push({ room:
              Room.create!({
              :host_id => @users[USER_TYPES.sample].sample[:user].id,
              :title => "#{ADJECTIVES.sample} yacht, all aboard!",
              :address => Faker::Address.street_address,
              :lat => (LAT_LNG.sample[:lat]+(rand()/100)),
              :lng => (LAT_LNG.sample[:lng]+(rand()/100)),
              :price => (rand()*400).to_i,
              :max_guests => (rand()*8.to_i),
              :description => 'Ship from the 1800s with ample space and plenty of natural light.
               Please stay on our boat with us. We can take you across the marina or to some islands nearby.
                There are awesome places for swimming and fishing as well. Sometimes we see dolphins on the port side of the vessel.
                My father was a sailor in the Navy so I am an experience captain!. The sunsets are also beautiful and
                 we would love for you to join us',
              :beds => (rand()*8.to_i),
              :bathrooms => (rand()*3.to_i),
              :bedrooms => (rand()*5.to_i),
              :cancellation => CANCELLATION.sample,
              :min_stay => (rand()*4).to_i,
              :room_type => 'Yacht'
            }),
            picture: boat
          })
        end
    end
  end
end
