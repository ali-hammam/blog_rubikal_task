class CommentsController < ApplicationController
  def create 
    comment = Comment.new comment_params();

    if comment.valid?
      comment.save!
      render json: {isCreated: true, comment: comment}
    else
      render json: {isCreated: false}
    end
  end

  def delete 
    comment = Comment.find_by(id: params[:id]).destroy

    if comment.persisted? 
      render json: {isDeleted: false}
    else
      render json: {isDeleted: true}
    end
  end

  private
  def comment_params 
    params.permit(:post_id, :comment)
  end
end
