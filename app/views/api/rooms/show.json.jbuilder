json.room do
  json.set! @room.id do
    json.partial! '/api/rooms/room', room: @room, photos: @room_photos
    json.reviewerIds @reviewer_ids
    json.renterIds @renter_ids
    json.bedrooms @room.bedrooms
    json.beds @room.beds
    json.bathrooms @room.bathrooms
    json.max_guests @room.max_guests
    json.min_stay @room.min_stay
    json.cancellation @room.cancellation
    json.description @room.description
    json.ammenities do
      json.kitchen @room.kitchen
      json.wifi @room.wifi
      json.washer @room.washer
      json.dryer @room.dryer
      json.gym @room.gym
      json.hot_tub @room.hot_tub
    end
  end
end

json.photos do
  @room_photos.each do |photo|
    json.set! photo.id do
      json.partial! '/api/photos/photo', photo: photo
    end
  end

  @users.each do |user|
    user.photos.each do |photo|
      json.set! photo.id do
        json.partial! '/api/photos/photo', photo: photo
      end
    end
  end

  @host.photos.each do |photo|
    json.set! photo.id do
      json.partial! '/api/photos/photo', photo: photo
    end
  end

  if @current_user
    @current_user.photos.each do |photo|
      json.set! photo.id do
        json.partial! '/api/photos/photo', photo: photo
      end
    end
  end

end

json.reviews do
  @room_reviews.each do |review|
    json.set! review.id do
      json.partial! '/api/reviews/review', review: review
    end
  end
end

json.users do
  @users.each do |user|
    json.set! user.id do
      json.partial! '/api/users/user', user: user
    end
  end

  json.set! @host.id do
    json.partial! '/api/users/user', user: @host
  end

  if @current_user
    json.set! @current_user.id do
      json.partial! '/api/users/user', user: @current_user
    end
  end
end

  # @user_photos.each do |photo|
  #   json.set! photo.id do
  #     json.partial! '/api/photos/photo', photo: photo
  #   end
  # end
