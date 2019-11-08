class RemoveAnotherColumnFromFollows < ActiveRecord::Migration[5.2]
  def change
    remove_column :follows, :followee_id
    remove_column :follows, :followee_type 
  end
end
