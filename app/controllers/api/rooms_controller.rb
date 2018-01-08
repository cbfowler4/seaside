class Api::RoomsController < ApplicationController

  def index
    @rooms = Room.filterRooms(filter_params)
  end

  def show
    @room = Room.find_by(id: params[:id].to_i);
    @photos = @room.image
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
    params.require(:filters).permit(bounds: [:north, :west, :east, :south], guests: [:child, :adult])
  end
end
