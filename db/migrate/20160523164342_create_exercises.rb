class CreateExercises < ActiveRecord::Migration
  def change
    create_table :exercises do |t|
      t.string :name
      t.text :description
      t.string :svg_image_name

      t.timestamps null: false
    end
  end
end
