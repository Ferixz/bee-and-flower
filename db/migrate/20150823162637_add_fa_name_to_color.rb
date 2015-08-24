class AddFaNameToColor < ActiveRecord::Migration
  def change
    add_column :colors, :fa_name, :string
  end
end
