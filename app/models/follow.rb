class Follow < ApplicationRecord

validates :follower_id, presence: true 
validates :followable_id, presence: true 
validates :followable_type, presence: true 

validates_uniqueness_of :follower_id, scope: [:followable_id]


belongs_to :followable, polymorphic: true 

belongs_to :follower,
    class_name: :User 

# belongs_to :followed,
#     foreign_key: :followee_id,
#     class_name: :Board 

#     belongs_to :followed,
#     foreign_key: :followee_id,
#     class_name: :User 


end 