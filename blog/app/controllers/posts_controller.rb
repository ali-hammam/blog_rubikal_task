class PostsController < ApplicationController

  def index
    user_posts = Post.where(user_id: @user[:id]);
    other_user_posts = Post.where.not(user_id: @user[:id]);
    render json: {user_posts: user_posts, other_user_posts: other_user_posts};
  end

  def create
    newPost = Post.new post_params();
    newPost.user_id = @user[:id];

    if newPost.valid?
      newPost.save!;
      render json: {msg: 'post created successfully', post:newPost}
    else 
      render json: {msg: "post didn't created successfully"}
    end
  end

  def show 
    post = Post.find_by(id: params[:id]);
    render json: {post: post, comments: post.comments};
  end

  def delete 
    post = Post.find_by(id: params[:id]).destroy;
    if post.persisted?
      render json: {msg: "post didn't deleted", isDeleted: false};
    else
      render json: {msg: "post deleted successfully", isDeleted: true}
    end
  end

  def edit 
    editablePost = post_params();
    post = Post.find_by(id: params[:id]);
    if post.update(title: editablePost[:title], body: editablePost[:body])
      render json: {msg: "post updated successfully", isUpdated: true, post: post}
    else
      render json: {msg: "post didn't updated successfully", isUpdated: false}
    end
  end

  private 
  def post_params 
    params.permit(:title, :body)
  end
end
