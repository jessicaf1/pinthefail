import React from 'react';
import UserShowPage from './user_showpage';
import { connect } from 'react-redux';
import { openModal } from  '../../actions/modal_actions';
import { fetchUser, updateUser, fetchUsers } from '../../actions/user_actions'
import { withRouter, Route, Redirect, Link, HashRouter, Switch } from 'react-router-dom';

export const mapStateToProps = (state, ownProps) => {
    debugger
    // const user = state.entities.users[ownProps.match.params.userId]
    let user = state.entities.users[ownProps.match.params.userId] || -0 
    // let userId = parseInt(ownProps.location.pathname.split('/')[4]);
    // let user = state.entities.users[userId] 
    // const user = state.entities.users[state.session.currentUser] || -0
    return {user}
}

export const mapDispatchToProps = dispatch => {
    return{
        fetchUser: id => dispatch(fetchUser(id)),
        fetchUsers: () => dispatch(fetchUsers()),
        updateUser: user => dispatch(updateUser(user)),
        openModal: modal => {
            return dispatch(openModal(modal));
        }

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShowPage))