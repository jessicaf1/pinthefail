class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.string :name, null: false 
      t.string :description, null: false 
      t.integer :user_id
      t.boolean :private

      t.timestamps
    end
  end
end
