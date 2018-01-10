json.room do
  json.set! @room.id do
    json.partial! '/api/rooms/room', room: @room, photos: @room_photos
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
end

json.reviews do
  @room_reviews.each do |review|
    json.set! review.id do
      json.partial! '/api/reviews/review', review: review
    end
  end
end

  # @user_photos.each do |photo|
  #   json.set! photo.id do
  #     json.partial! '/api/photos/photo', photo: photo
  #   end
  # end
