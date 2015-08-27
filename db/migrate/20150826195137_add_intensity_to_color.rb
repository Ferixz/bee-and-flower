class AddIntensityToColor < ActiveRecord::Migration
  def change
    add_column :colors, :intensity, :string
  end
end
