@rooms.each do |room|
  json.rooms do
    json.set! room.id do
      json.partial! '/api/rooms/room', room: room, photos: room.photos
    end
  end

  json.photos do
    room.photos.each do |photo|
      json.partial! '/api/photos/photo', photo: photo
    end
  end
end
