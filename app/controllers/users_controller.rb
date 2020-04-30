class UsersController < ApplicationController
	before_action :set_user, only: [:show, :update]

	def index
		@users = User.all
		render json: @users
	end

	def show
		@user = User.find(params[:id])
		render json: @user
	end

	def create
		@user = User.new(user_params)
		if @user.save
			render json: @user
		else
			render json: {error: 'Unable to create User!'}, status: 400
		end
	end

	def login
		@user = User.find_by(name: params[:user][:name])
		if @user
			render json: @user, status: :accepted
		# else
		# 	render json: @user.errors, status: :unauthorized
		# 	end
		else
			render json: @user, status: :not_found
		end
	end

	def update
		@user = User.find(params[:id])
		if @user
			@user.update(user_params)
			render json: {message: 'User Updated'}, status: 200
		else
			render json: {error: 'Unable to update User!'}, status: 400
		end
	end

	def destroy
		@user = User.find(params[:id])
		if @user
			@user.destroy
			render json: {message: 'User Deleted'}, status: 200
		else
			render json: {error: 'Unable to delete User!'}, status: 400
		end
	end

	private

	def user_params
		params.require(:user).permit(:name, :phoneNumber)
	end

	def set_user
		@user = User.find(params[:id])
	end

end
