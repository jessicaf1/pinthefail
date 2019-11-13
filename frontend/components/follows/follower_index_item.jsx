
import React from 'react';

class FollowerIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.handleFollow = this.handleFollow.bind(this);
        this.handleUnfollow = this.handleUnfollow.bind(this);
    }

    handleUnfollow(e){
        e.preventDefault(); 
        // debugger
        // let i = this.props.currentUser.followed_user_ids.indexOf(this.props.follow.id)
        // this.props.currentUser.followed_user_ids.splice(i, 1)
        let follow = {follower_id: this.props.currentUser.id, followable_id: this.props.follower.id, followable_type: 'User'}
        debugger
        let payload = {follow: follow, user: this.props.currentUser}
        this.props.deleteFollow(follow)
    }

    handleFollow(e){
        e.preventDefault(); 
        // debugger
        // let i = this.props.currentUser.followed_user_ids.indexOf(this.props.follow.id)
        // this.props.currentUser.followed_user_ids.splice(i, 1)
        let follow = {follower_id: this.props.currentUser.id, followable_id: this.props.follower.id, followable_type: 'User'}
        // debugger
        // let payload = {follow: follow, user: this.props.currentUser}
        this.props.createFollow(follow)
    }

    render(){
        debugger
    return (
    <div className="follow-list">
        <div className="follow-list-items">
           {/* <div className="followindexitem-name">{this.props.follower.l_name}</div> */}

           {this.props.follower.photoUrl !== undefined ? 
            <img className="follower-image" src={this.props.follower.photoUrl}/>
            : <img className="default-image" src={window.pinface} />}

            <div className="followindexitem-name">{this.props.follower.f_name + " " + this.props.follower.l_name}</div> 
            {/* <img id="followindexitem-pic"src={this.props.follower.f_name.photoUrl} alt=""/> */}
            <div className="followindexitem-followers">2 boards · {this.props.follower.follower_ids.length} followers</div>

            {this.props.currentUser.followed_user_ids.includes(this.props.follower.id) ?
            <button onClick={this.handleUnfollow} className="unfollow-button">Unfollow</button> :
            <button onClick={this.handleFollow} className="follow-button">Follow</button>}
            </div>
        </div>
    )
    } 
}


import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {createFollow, deleteFollow} from '../../actions/follow_actions'

export const mapStateToProps = state => {
    debugger
    return {
        currentUser: state.entities.users[state.session.currentUser],
        followers: state.entities.follows 
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()), 
        createFollow: (follow) => dispatch(createFollow(follow)),
        deleteFollow: follow => dispatch(deleteFollow(follow))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FollowerIndexItem))