class Api::RoomsController < ApplicationController

  def index
    @rooms = Room.filterRooms(filter_params).includes(:photos);
  end

  def show
    @room = Room.find_by(id: params[:id].to_i)
    # @users = Room.find_all_users(@room)

    # @user_photos = @users.map do |user|
    #   user.photos
    # end

    @room_photos = @room.photos
    @room_reviews = @room.reviews
    debugger
    # @room.rating = Review.get_average_rating(@room)

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
