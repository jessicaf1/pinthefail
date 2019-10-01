class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false 
      t.string :email, null: false 
      t.string :f_name, null: false 
      t.string :l_name, null: false 
      t.string :location, null: false 
      t.string :description, null: false 
      t.string :password_digest, null: false
      t.string :session_token, null: false 
      t.datetime :created_at, null: false 
      t.datetime :updated_at, null: false 
      
      t.timestamps
    end
    add_index :users, :username, unique: true 
    add_index :users, :email, unique: true 
    add_index :users, :session_token, unique: true 
  end
end
