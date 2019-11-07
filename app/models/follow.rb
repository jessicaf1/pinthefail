class Follow < ApplicationRecord

validates :follower_id, presence: true 
validates :followee_id, presence: true 
validates :follow_type, presence: true 

belongs_to :follower,
    foreign_key: :user_id,
    class_name: :User 

belongs_to :followable, polymorphic: true 

end 