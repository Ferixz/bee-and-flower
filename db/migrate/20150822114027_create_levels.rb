class CreateLevels < ActiveRecord::Migration
  def change
    create_table :levels do |t|
      t.text :nodes_list
      t.text :links_list
      t.integer :number_of_nodes

      t.timestamps null: false
    end
  end
end
