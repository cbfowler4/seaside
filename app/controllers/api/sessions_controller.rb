class Api::SessionsController < ApplicationController

  def create

    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      login(@user)
      render 'api/users/create'
    else
      render json: ["Invalid email or password"], status: 422
    end
  end

  def destroy
    logout
    render json: {}
  end

  private

  def session_params
    params.require(:user).permit(:email, :password)
  end
end
