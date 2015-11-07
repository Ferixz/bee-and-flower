class AddSolToSolutions < ActiveRecord::Migration
  def change
    add_column :solutions, :sol, :text
  end
end
