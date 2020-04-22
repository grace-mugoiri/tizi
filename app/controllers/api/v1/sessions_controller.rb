class SessionsController < ApplicationController
def create
    @user = User.find_by(name: session_params[:name])

    if @user && @user.authenticate(session_params[:name])
      login!
      render json: {
        logged_in: true,
        user: @user
      }
    else
      render json: {
        status: 401,
        errors: ['no such user', 'verify credentials and try again or signup']
      }
    end
  end
def is_logged_in?
    if logged_in? && current_user
      render json: {
        logged_in: true,
        user: current_user
      }
    else
      render json: {
        logged_in: false,
        message: 'no such user'
      }
    end
  end
def destroy
    logout!
    render json: {
      status: 200,
      logged_out: true
    }
  end
private
def session_params
    params.require(:user).permit(:name, :phoneNumber)
  end
end
