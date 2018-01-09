class Api::BookingsController < ApplicationController

  def show

  end

  def create
    parsed_book_params = booking_params;
    start_date = Date.new(*(parsed_book_params[:startDate].split('/').map(&:to_i).rotate(2)))
    end_date = Date.new(*(parsed_book_params[:endDate].split('/').map(&:to_i).rotate(2)))
    @booking = Booking.new({
      start_date: start_date,
      end_date: end_date,
      room_id: parsed_book_params[:roomId],
      renter_id: parsed_book_params[:currentUser],
      adult_guests: parsed_book_params[:adult],
      child_guests: parsed_book_params[:child]
      })

    if @booking.save
      render :create
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  private

  def booking_params
    params.require(:booking).permit(:startDate, :endDate, :roomId, :currentUser, :adult, :child)
  end
end
