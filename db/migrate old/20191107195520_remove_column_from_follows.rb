class RemoveColumnFromFollows < ActiveRecord::Migration[5.2]
  def change
    remove_column :follows, :follow_type, :string
  end
end
