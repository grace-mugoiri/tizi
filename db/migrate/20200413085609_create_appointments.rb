class CreateAppointments < ActiveRecord::Migration[6.0]
  def change
    create_table :appointments do |t|
      t.string :date
      t.string :time
      t.string :instructor
      t.string :exercises

      t.timestamps
    end
  end
end
