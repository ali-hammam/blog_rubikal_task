class ApplicationController < ActionController::API
  include JsonWebToken

  before_action :authenticate_request

  private
    def authenticate_request
      unless request.headers["Authorization"]
        return render json: {msg: "Illegal Access"}
      end
      header = request.headers["Authorization"]
      header = header.split(" ").last if header
      decode = jwt_decode header
      #@user = User.find_by(decode[:user_id]) 
    end
end
