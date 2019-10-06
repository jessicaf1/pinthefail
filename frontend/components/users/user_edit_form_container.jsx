import React from 'react';
import { connect } from 'react-redux';
import UserEditForm from './user_edit_form';
import { updateUser, fetchUser } from '../../actions/user_actions'

const mapStateToProps = (state)=> {
    debugger
    
   return {
    currentUser: state.entities.users[state.session.currentUser]
    
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateUser: user => dispatch(updateUser(user)),
        fetchUser: id => dispatch(fetchUser(id)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserEditForm)