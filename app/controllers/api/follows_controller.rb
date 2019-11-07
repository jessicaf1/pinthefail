class Api::FollowsController < ApplicationController

def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id 
    if @follow.save
        render :show 
    else
        render json: @follow.errors.full_messages, status: 422
    end 
end 

def destroy
    @follow.destroy
    render json: @follow.id 
end 



def follow_params
    params.require(:follow).permit(:follower_id, :followee_id, :follow_type)
end

end
