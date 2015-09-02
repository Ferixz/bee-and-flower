class ImproveProfile < ActiveRecord::Migration
  def change
    add_column :profiles, :birthdate, :date
    add_column :profiles, :sex, :string
  end
end
