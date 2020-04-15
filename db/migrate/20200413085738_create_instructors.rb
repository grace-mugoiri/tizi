class CreateInstructors < ActiveRecord::Migration[6.0]
  def change
    create_table :instructors do |t|
      t.string :name
      t.string :experience
			t.string :availability

      t.timestamps
    end
  end
end

