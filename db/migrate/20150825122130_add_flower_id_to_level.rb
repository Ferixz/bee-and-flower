class AddFlowerIdToLevel < ActiveRecord::Migration
  def change
    add_column :levels, :flower_id, :integer
  end
end
