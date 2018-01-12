class Api::ReviewsController < ApplicationController
  def create

    if (params[:room_id])
      reviewable = Room.find_by(id: params[:room_id])
    else
      reviewable = User.find_by(id: params[:user_id])
    end

    @review = Review.new({
      body: params[:review][:body],
      rating: params[:review][:rating],
      author_id: params[:review][:authorId],
      reviewable: reviewable });

    @room = reviewable

    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find_by(id: params[:id])

    if @review.update({body: params[:review][:body], rating: params[:review][:rating]})
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end


  def destroy
    @review = Review.find_by(id: params[:id])
    @review.destroy!

    if @review.reviewable.is_a?(Room)
      @room = @review.reviewable
    end

    if @review
      render :show
    else
      render json: ['Review not found'], status: 422
    end
  end


  private

  def review_params
    params.require(:review).permit(:body, :rating, :authorId);
  end

end
