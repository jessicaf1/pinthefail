import React from 'react';
import UserShowPage from './user_showpage';
import { connect } from 'react-redux';
import { openModal } from  '../../actions/modal_actions';
import { fetchUser, updateUser} from '../../actions/user_actions'

export const mapStateToProps = (state, ownProps) => {
    const user = state.entities.users[ownProps.match.params.userId]
    return {user}
}

export const mapDispatchToProps = dispatch => {
    return{
        fetchUser: id => dispatch(fetchUser(id)),
        updateUser: user => dispatch(updateUser(user)),
        openModal: modal => {
            return dispatch(openModal(modal));
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShowPage)