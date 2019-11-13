class Api::FollowsController < ApplicationController

def index
    @follows = Follow.all
    render :index 
end 

def create
    # debugger
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id 
    if @follow.save
        # debugger
        render :show
    else
        render json: @follow.errors.full_messages, status: 422
    end 
end 

def destroy
    # debugger
    @follow = Follow.find_by(followable_id: follow_params["followable_id"], follower_id: follow_params["follower_id"])
    @follow.destroy
    render :show
end 



def follow_params
    params.require(:follow).permit(:follower_id, :followable_id, :followable_type)
end

end
