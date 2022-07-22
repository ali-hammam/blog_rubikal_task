class UsersController < ApplicationController
  skip_before_action :authenticate_request, only: [:create]
  before_action :set_user, only: [:show, :destroy]

  def index 
    @users = User.select(:id, :username,:email);
    render json: @users, status: :ok
  end

  def show 
    render json: @user, status: :ok
  end

  def create 
    @user = User.new user_params()
    if @user.save 
      render json: @user, status: :created 
    else
      render json: {errors: @user.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def update 
    unless @user.update(user_params())
      render json: {errors: @user.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def destroy 
    @user.destroy
    if @user.persisted?
      render json: {isDeleted: false}
    else
      render json: {isDeleted: true}
    end
  end

  private 
    def user_params 
      params.permit(:username, :email, :password)
    end

    def set_user 
      @user = User.find_by(id: params[:id])
    end
end
