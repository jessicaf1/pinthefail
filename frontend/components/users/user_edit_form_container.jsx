
import { connect } from 'react-redux';
import UserEditForm from './user_edit_form';
import { updateUser } from '../../actions/user_actions'

const mapStateToProps = state => {
    return {
    currentUser: state.entities.users[state.session.currentUser]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateUser: user => dispatch(updateUser(user))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserEditForm)