class CreateAppointments < ActiveRecord::Migration[6.0]

  def change
    create_table :appointments do |t|
      t.string :date
      t.string :time
			t.references :instructor
			t.references :user
      t.string :exercises

      t.timestamps
    end
  end
end
