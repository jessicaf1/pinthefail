import React from 'react';
import {Link, Route, HashRouter, Switch, withRouter} from 'react-router-dom';
import FollowedUserIndexItem from './followed_user_index_item'

class Following extends React.Component {

    constructor(props){
        debugger
        super(props)
    }



componentDidMount(){
    // this.props.fetchUser(this.props.match.params.userId)
    this.props.fetchFollows()
    this.props.fetchUsers()
}

render(){
    if (this.props.user === undefined) {
        debugger
        return null 
    }
   let arr; 
    if (this.props.users === undefined || this.props.users[0] === undefined) {
        arr = <div></div>
    }
   
    else {
    arr = this.props.users.map(user => {
        debugger
        if(user.id !== this.props.user.id && user.f_name !== null){
        return  <FollowedUserIndexItem follow={user}/> 
        } 
       
    })
}
    return(
        
        <div className="follow-list">
              <div id="num-follows">{this.props.user.followed_user_ids.length} </div>
                <div id="followers-followers">followed users</div>
            <div className="follow-links">
                    <Link className="follow-link" to={`/users/${this.props.user.id}/following`}>
                        <div className="follow-link">People</div>    
                    </Link> 
                    <Link className="follow-link" to={`/users/${this.props.user.id}/followingboards`}>Boards</Link> 
           
            </div>
            <div className="num-follows-h">
              
            </div>
            <div id="follow-array">
            {arr}
            </div>
        </div>
    )
}




}

export default Following