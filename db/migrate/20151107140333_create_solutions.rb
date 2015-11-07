class CreateSolutions < ActiveRecord::Migration
  def change
    create_table :solutions do |t|
      t.integer :user_id
      t.integer :game_id
      t.integer :level_id
      t.string :result

      t.timestamps null: false
    end
  end
end
