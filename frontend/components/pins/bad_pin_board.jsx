import React from 'react';

class BadPinBoard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
    return (
        <div className="badpinboard">
            <div id="badpinboard-h">
                Pin already attached to board! 
            </div>
            <button id="badpinboard-b" onClick={this.props.closeModal}>back to pins</button>
        </div>
    )
    } 
}


import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BadPinBoard))