class CreateActivitySets < ActiveRecord::Migration
  def change
    create_table :activity_sets do |t|
      t.integer :activity_id
      t.integer :reps

      t.timestamps null: false
    end
    add_index :activity_sets, :activity_id
  end
end
