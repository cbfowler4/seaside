class Api::RoomsController < ApplicationController

  def index
    # @rooms = Room.all
    @rooms = Room.filterRooms(params['filters'])
  end

  def show
  end

  def create
  end

  def update
  end

  def delete
  end
end
