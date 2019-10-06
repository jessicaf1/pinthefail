class AddColumnsToPins < ActiveRecord::Migration[5.2]
  def change
    add_column :pins, :name, :string, null: false 
    add_column :pins, :link_url, :string
  end
end
