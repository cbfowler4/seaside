json.room do
  json.set! @room.id do
    json.renterIds @room.renter_ids 
  end
end
