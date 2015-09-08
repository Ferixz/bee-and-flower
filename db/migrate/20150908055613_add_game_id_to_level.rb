class AddGameIdToLevel < ActiveRecord::Migration
  def change
    add_column :levels, :game_id, :integer
  end
end
