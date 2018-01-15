class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    debugger
    if @user.save
      Photo.create({title: 'user_default', imageable: @user})
      login(@user)
      render 'api/users/create'
    else
      if @user.errors.keys.include?(:lname)
        @user.errors.messages.delete(:lname)
        @user.errors.messages[:Last] = ["name can't be blank"]
      end

      if @user.errors.keys.include?(:fname)
        @user.errors.messages.delete(:fname)
        @user.errors.messages[:First] = ["name can't be blank"]
      end

      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    @bookings = @user.bookings.includes(room: [:photos])
    if @user
      render :show
    else
      render json: ['User not found'], status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :fname, :lname, :password, :city, :state)
  end
end
