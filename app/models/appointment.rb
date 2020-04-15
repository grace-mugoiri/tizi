class Appointment < ApplicationRecord
	belongs_to :instructor
	belongs_to :user
	accepts_nested_attributes_for :instructor
end



