class Api::RoomsController < ApplicationController

  def index
    @rooms = Room.filterRooms(filter_params)
  end

  def show
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
