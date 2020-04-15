class Api::V1::InstructorsController < ApplicationController

	def index
		@instructors = Instructor.all
		render json: @instructors
	end

	def show
		render json: @instructor
	end

	def create
		@instructor = Instructor.new(instructor_params)
		if @instructor.save
			render json: @instructor
		else
			render error: { error: 'Unable to create Instructor'}, status: 400
		end
	end

	def update
		if @instructor
			@instructor.update(instructor_params)
			render json: {message: 'Success'}, status: 200
		else
			render json:{ error: 'Unable to update Instructor'}, status: 400
		end
	end

	def destroy
		@instructor = Instructor.find(params[:id])
		if @instructor
			@instructor.destroy
			render json: {message: 'Deleted'}, status: 200
		else
			render json: { error: 'Unable to delete instructor'}, status: 400
		end
	end

	private

	def instructor_params
		params.require(:instructor).permit(:name, :experience, :availability)
	end

end
