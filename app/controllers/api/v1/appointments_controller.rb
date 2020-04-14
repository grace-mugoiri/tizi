class Api::V1::AppointmentsController < ApplicationController
	def index
		@appointments = Appointment.all
		render json: @appointments
	end

	def show
		render json: @appointment
	end

	def create
		@appointment = Appointment.new(appoint_params)
		 if @appointment.save
			render json: @appointment
		 else
			render error: { error: 'Unable to create'}, status: 400
		 end
	end

	def update
		if @appointment
			@appointment.update(appoint_params)
			render json: {message: 'Success'}, status: 200
		else
			render json: {error: 'Unable to update Appointment!'}, status: 400
		end
	end

	def destroy
		if @appointment
			@appointment.destroy
			render json: {message: 'Deleted'}, status 200
		else
			render json: {error: 'Unable to delete !'}, status 400
		end
	end
	
	private

	def appoint_params
		params.require(:appointment).permit(:date, :time, :instructor, :exercise)
	end

end
