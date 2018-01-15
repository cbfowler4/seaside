json.reviews do
  @user.reviews.each do |review|
    json.set! review.id do
      json.partial! '/api/reviews/review', review: review
    end
  end
end

json.users do
  json.set! @user.id do
    json.partial! 'api/users/user', user: @user
    json.reviewIds @user.review_ids
    json.reviewerIds @user.reviewer_ids
    json.show true
  end

  @user.reviewers.each do |reviewer|
    json.set! reviewer.id do
      json.partial! 'api/users/user', user: reviewer
    end
  end
end

json.bookings do
  @bookings.each do |booking|
    json.set! booking.id do
      json.partial! 'api/bookings/booking', booking: booking
    end
  end
end

json.rooms do
  @bookings.each do |booking|
    json.set! booking.room.id do
      json.partial! 'api/rooms/room', room: booking.room
    end
  end
end


json.photos do
  @bookings.each do |booking|
    booking.room.photos.each do |photo|
      json.partial! '/api/photos/photo', photo: photo
    end
  end
end
