@rooms.each do |room|
  json.partial! '/api/rooms/room', room: room
end
