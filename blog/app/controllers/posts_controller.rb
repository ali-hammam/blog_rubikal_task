class PostsController < ApplicationController
  include Rails.application.routes.url_helpers

  def index
    user_posts = Post.where(user_id: @user[:id]);
    other_user_posts = Post.where.not(user_id: @user[:id]);

    user_posts_json = user_posts.map { |post| gettingPostImage(post) }
    other_user_posts_json = other_user_posts.map { |post| gettingPostImage(post) }
  
    render json: {user_posts: user_posts_json, other_user_posts: other_user_posts_json}
  end

  def create
    newPost = Post.new post_params();
    newPost.user_id = @user[:id];
    newPost.post_image = params[:post_image] if params[:post_image]

    if newPost.valid?
      newPost.save!;
      render json: {msg: 'post created successfully', post: gettingPostImage(newPost)}
    else 
      render json: {msg: "post didn't created successfully"}
    end
  end

  def show 
    post = Post.find_by(id: params[:id]);
    user_comments = post.comments.where(user_id: @user[:id])
    other_users_comments = post.comments.where.not(user_id: @user[:id]);

    response = {
      post: gettingPostImage(post),
      user_comments: user_comments,
      other_users_comments: other_users_comments,
    };

    render json: {**response, isPostAdmin: true} if post[:user_id] == @user[:id]
    render json: {**response, isPostAdmin: false} unless  post[:user_id] == @user[:id]
    
  end

  def delete 
    post = Post.find_by(id: params[:id]).destroy;
    post.destroy if post[:user_id] == @user[:id];

    if post.persisted?
      render json: {msg: "post didn't deleted", isDeleted: false};
    else
      render json: {msg: "post deleted successfully", isDeleted: true}
    end
  end

  def edit 
    editablePost = post_params();
    post = Post.find_by(id: params[:id]);
    if post[:user_id] == @user[:id] && post.update(title: editablePost[:title], body: editablePost[:body])
      render json: {msg: "post updated successfully", isUpdated: true, post: post}
    else
      render json: {msg: "post didn't updated successfully", isUpdated: false}
    end
  end

  private 
  def post_params 
    params.permit(:title, :body, :post_image)
  end

  def gettingPostImage(post) 
    postJson = post.as_json;
    image = rails_blob_url(post.post_image) if post.post_image.attached?
    {**postJson, image: image};
  end
end
