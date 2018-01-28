RENTER_REVIEWS_WITH_NAMES = [
  ' was a great person!',
  ' please come back soon! ',
  ' was the perfect guest! ',
  ' could have been a better guest. ',
  ' left the deck a mess! ',
  ' caught a massive fish! ',
  ' left early in the morning, very respectful. '
]

RENTER_REVIEWS_GENERAL = [
  'Don\'t forget to watch out for pirates! ',
  'You were one of our most respectful sailors. ',
  'Not only did you stay on a ship, but you also built a ship. A friendship. ',
  'Arr you left too soon! ',
  'You were cool, went with the flow. ',
  'Acted very fishy, but eventually warmed up. ',
  'You "floated our boat" with your warm conversation. ',]

RENTER_REVIEWS_SENDOFF = [
  'We would love to have them again',
  'We hope to see you again soon!',
  'We have built a strong friendship',
  'Anchors away! Thanks for staying!',
  'Thank you for staying with us.',
  'We hope to voyage the seven seas again soon.',
  'When pirates strike, we want you aboard our vessel.']

ROOM_REVIEWS_WITH_NAMES = [
  ' thank you for letting us stay with you! It was such a pleasure for me to hangout.',
  ' thank you so much! ',
  ' was a great host and has a beautiful boat! ',
  ' helped create a perfect weekend for me and my family! ',
  ' owns an amazing boat and was an amazing host! ',
  ' took us fishing on their boat and made us a fresh fish dinner! ',
  ' thank you a million times over! ',
  ' was not around during our stay, boat was clean. ',
  ' has a huge personality! A lot of fun! ',
  ' left the poop deck a mess! ']

ROOM_REVIEWS_SENDOFF = [
  'We will be staying with you again soon!',
  'We hope to see you again soon!',
  'We have built a strong friendship',
  'Anchors away! Thanks for hosting!',
  'Thank you for allowing us to board your vessel.',
  'We hope to voyage the seven seas again soon.',
  'Watch out for pirates, sharks and large squid! LOL',
  'Not only did we stay on a ship, but we also built a ship. A friendship. ',
  'You were cool, went with the flow. ',
  'Acted very fishy, but eventually warmed up. ']



class ReviewSeeds
  def initialize(bookings)
    @bookings = bookings
    @reviews = []
  end

  def generateSeeds()
    @bookings.each do |booking|
      @reviews.push(Review.create!({
        reviewable: booking.renter,
        author_id: booking.room.host.id,
        rating: (rand()*2+3).to_i,
        body: "#{booking.renter.fname}#{RENTER_REVIEWS_WITH_NAMES.sample}#{RENTER_REVIEWS_GENERAL.sample}#{RENTER_REVIEWS_SENDOFF.sample}",
        }))

      @reviews.push(Review.create!({
        reviewable: booking.room,
        author_id: booking.renter.id,
        rating: (rand()*2+3).to_i,
        body: "#{booking.room.host.fname}#{ROOM_REVIEWS_WITH_NAMES.sample}#{ROOM_REVIEWS_SENDOFF.sample}",
        }))
    end
  end
end
