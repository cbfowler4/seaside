json.review do
  json.set! @review.id do
    json.partial! '/api/reviews/review', review: @review
  end
end

if @room
  json.room do
    json.set! @room.id do
      json.reviewIds @room.review_ids
      json.reviewerIds @room.reviewer_ids
    end
  end
end
