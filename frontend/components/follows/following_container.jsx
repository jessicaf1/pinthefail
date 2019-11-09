import {connect} from 'react-redux';
import Following from './following';
import { fetchUsers, fetchUser } from '../../actions/user_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions'


const mapStateToProps = state => {
    debugger
    let follows = state.entities.users[state.session.currentUser] ? state.entities.users[state.session.currentUser].followed_user_ids.map(id => state.entities.users[id]) : [];
    return {
    user: state.entities.users[state.session.currentUser], 
    follows: follows, 
    } 
}

const mapDispatchToProps = dispatch => {
    debugger
    return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUser: id => dispatch(fetchUser(id)),
    createFollow: follow => dispatch(createFollow(follow)),
    deleteFollow: id => dispatch(deleteFollow(id))
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Following)