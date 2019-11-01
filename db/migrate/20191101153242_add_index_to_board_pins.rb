class AddIndexToBoardPins < ActiveRecord::Migration[5.2]
  def change
    add_index :board_pins, [:board_id, :pin_id], unique: true 
  end
end
