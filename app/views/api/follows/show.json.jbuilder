json.partial! 'api/follows/follow', follow: @follow 

#json.partial! 'api/users/user', user: @user

#json.user do 
   #@follow.follower_ids.each do |follower|
        #json.set! follower.id do 
            #json.partial! 'api/users/user', user: follower 
        #end
    #end 
#end 