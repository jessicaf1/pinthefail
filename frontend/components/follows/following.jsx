import React from 'react';
import {Link, Route, HashRouter, Switch, withRouter} from 'react-router-dom';
import FollowedUserIndexItem from './followed_user_index_item'

class Following extends React.Component {

    constructor(props){
        debugger
        super(props)
    }

componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId)
}

render(){
    if (this.props.user === undefined) {
        debugger
        return null 
    }
   let arr; 
    if (this.props.follows === undefined || this.props.follows[0] === undefined) {
        arr = <div></div>
    }
   
    else {
    arr = this.props.follows.map(follow => {
        debugger
        return <FollowedUserIndexItem follow={follow}/> 
    })
}
    return(
        <div className="follow-list">
            <div className="num-follows-h">
                <div id="num-follows">{arr.length} </div>
                <div id="followers-followers">followed users</div>
            </div>
            {arr}
        </div>
    )
}




}

export default Following