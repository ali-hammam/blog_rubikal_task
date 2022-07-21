class PostsController < ApplicationController
  def index 
    posts = Post.all();
    render json: posts;
  end

  def create
    post = post_params();
    newPost = Post.new post;

    if newPost.valid?
      newPost.save!;
      render json: {msg: 'post created successfully', post:newPost}
    else 
      render json: {msg: "post didn't created successfully"}
    end
  end

  def show 
    post = Post.find_by(id: params[:id]);
    render json: post;
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
