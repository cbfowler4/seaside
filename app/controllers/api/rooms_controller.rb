class Api::RoomsController < ApplicationController

  def index
    @rooms = Room.filterRooms(filter_params).includes(:photos);

    @rooms.each do |room|
      room.rating = room.getRating
    end
  end

  def show
    @room = Room.find_by(id: params[:id].to_i)
    @room.rating = @room.getRating
    @room_photos = @room.photos
    @room_reviews = @room.reviews
    @users = @room.reviewers
    @host = @room.host
    @current_user = current_user
    @reviewer_ids = @room.reviewer_ids


    bookings = @room.bookings

    @renter_ids = bookings.map do |booking|
      booking.renter_id
    end


    if @room
      render :show
    else
      render json: ['Room not found'], status: 422
    end
  end

  def create
  end

  def update
  end

  def delete
  end


  private

  def filter_params
    params.require(:filters).permit(bounds: [:north, :west, :east, :south],
      guests: [:child, :adult],
      price: [:min, :max])
  end
end
