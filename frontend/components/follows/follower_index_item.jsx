
import React from 'react';

class FollowerIndexItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
    return (
        <div>
           <div className="followindexitem-name">{this.props.follower.f_name + " " + this.props.follower.l_name}</div> 
           {/* <div className="followindexitem-name">{this.props.follower.l_name}</div> */}

           {this.props.follower.photoUrl !== undefined ? 
            <img className="follower-image" src={this.props.follower.photoUrl}/>
            : <img className="default-image" src={window.pinface} />}

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FollowerIndexItem))