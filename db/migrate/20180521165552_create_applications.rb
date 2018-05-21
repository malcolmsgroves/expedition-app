class CreateApplications < ActiveRecord::Migration[5.2]
  def change
    create_table :applications do |t|
      t.string :email
      t.string :firstName
      t.string :lastName
      t.integer :overall_exp
      t.integer :hvac_exp
      t.integer :refrigeration_exp
      t.integer :mechanical_exp

      t.timestamps
    end
  end
end
