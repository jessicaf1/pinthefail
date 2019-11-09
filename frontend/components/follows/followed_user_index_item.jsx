
import React from 'react';

class FollowedUserIndexItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
    return (
        <div className="follow-list">
            <div className="follow-list-items">
                {/* <div className="followindexitem-name">{this.props.follower.l_name}</div> */}

                {this.props.follow.photoUrl !== undefined ? 
                    <img className="follower-image" src={this.props.follow.photoUrl}/>
                    : <img className="default-image" src={window.pinface} />}
                    <div className="followindexitem-name">{this.props.follow.f_name + " " + this.props.follow.l_name}</div> 
                    <button>Unfollow</button>
            </div>
            {/* <img id="followindexitem-pic"src={this.props.follower.f_name.photoUrl} alt=""/> */}
        </div>
    )
    } 
}


import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export const mapStateToProps = state => {
    return {
        currentUser: state.entities.users[state.session.currentUser]
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FollowedUserIndexItem))