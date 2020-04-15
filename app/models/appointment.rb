class Appointment < ApplicationRecord
	belongs_to :instructor
	belongs_to :user

end



