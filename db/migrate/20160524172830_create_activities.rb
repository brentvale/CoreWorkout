class CreateActivities < ActiveRecord::Migration
  def change
    create_table :activities do |t|
      t.integer :workout_id, null: false
      t.integer :exercise_id, null: false

      t.timestamps null: false
    end
    add_index :activities, :workout_id
    add_index :activities, :exercise_id
  end
end
