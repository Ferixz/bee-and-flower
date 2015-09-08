class AddElementToGame < ActiveRecord::Migration
  def change
    add_column :games, :element, :string
  end
end
