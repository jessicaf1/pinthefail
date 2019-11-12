class AddColumnToFollows < ActiveRecord::Migration[5.2]
  def change
    add_column :follows, :followee_type, :string, null: false
  end
end
