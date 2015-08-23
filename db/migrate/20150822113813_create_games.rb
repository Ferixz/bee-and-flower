class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :user_id
      t.integer :level_id
      t.integer :score
      t.integer :result
      t.text :user_solution
      t.integer :hop_count
      t.integer :line_of_code

      t.timestamps null: false
    end
  end
end
