class CommentsController < ApplicationController

  def create 
    comment = Comment.new comment_params();
    comment.user_id = @user[:id];

    if comment.valid?
      comment.save!
      render json: {isCreated: true, comment: comment}
    else
      render json: {isCreated: false}
    end
  end

  def delete 
    comment = Comment.find_by(id: params[:id])
    post = comment.post

    comment.destroy if comment[:user_id] == @user[:id] || post[:user_id] == @user[:id]

    if comment.persisted? 
      render json: {isDeleted: false}
    else
      render json: {isDeleted: true}
    end
  end

  def update 
    comment = Comment.find_by(id: params[:id]);
    editableComment = comment_params();

    if comment[:user_id] == @user[:id] && comment.update(comment: editableComment[:comment])
      render json: {msg: "comment updated successfully", isUpdated: true, comment: comment}
    else
      render json: {msg: "comment didn't updated successfully", isUpdated: false}
    end
  end

  private
  def comment_params 
    params.permit(:post_id, :comment)
  end
end
