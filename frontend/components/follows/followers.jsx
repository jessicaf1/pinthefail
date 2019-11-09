import React from 'react';
import {Link, Route, HashRouter, Switch, withRouter} from 'react-router-dom';
import FollowerIndexItem from './follower_index_item'

class Followers extends React.Component {

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
    if (this.props.followers === undefined || this.props.followers[0] === undefined) {
        arr = <div></div>
    }
   
    else {
    arr = this.props.followers.map(follower => {
        debugger
        return <FollowerIndexItem follower={follower}/> 
    })
}
    return(
        <div className="follow-list">
            <div className="num-follows-h">
                <div id="num-follows">{arr.length} </div>
                <div id="followers-followers">followers</div>
            </div>
            {arr}
        </div>
    )
}




}

export default Followers 