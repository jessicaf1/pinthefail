class AddColumnsToBoardPins < ActiveRecord::Migration[5.2]
  def change
    add_column :board_pins, :board_id, :integer, null: false 
    add_column :board_pins, :pin_id, :integer, null: false 
  end
end
