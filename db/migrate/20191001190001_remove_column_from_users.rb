class RemoveColumnFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :f_name
    remove_column :users, :l_name
    remove_column :users, :location
    remove_column :users, :description
  end
end
