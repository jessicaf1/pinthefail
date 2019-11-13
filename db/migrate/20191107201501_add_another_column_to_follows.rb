class AddAnotherColumnToFollows < ActiveRecord::Migration[5.2]
  def change
    add_column :follows, :followable_id, :integer, null: false  
    add_column :follows, :followable_type, :string, null: false 
    add_index :follows, :followable_id
  end

