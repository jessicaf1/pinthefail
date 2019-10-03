class AddColumnToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :f_name, :string
    add_column :users, :l_name, :string 
    add_column :users, :description, :string 
    add_column :users, :location, :string 
    
  end
end
