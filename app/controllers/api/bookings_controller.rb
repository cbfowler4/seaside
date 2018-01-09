class Api::BookingsController < ApplicationController

  def show

  end

  def create
    debugger
    parsed_book_params = booking_params;
    @booking = Booking.new({
      start_date: parsed_book_params[:startDate],
      end_date: parsed_book_params[:endDate],
      room_id: parsed_book_params[:roomId],
      renter_id: parsed_book_params[:currentUserId],
      adult_guests: parsed_book_params[:adult],
      child_guests: parsed_book_params[:child]
      })

    if @booking.save
      render :create
    else
      render json: @booking.errors.full_messages, status: 422
  end

  private

  def booking_params
    params.require(:booking).permit(:startDate, :endDate, :roomId, :currentUserId, :adult, :child)
  end
end
