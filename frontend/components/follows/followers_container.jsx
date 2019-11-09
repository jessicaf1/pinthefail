import {connect} from 'react-redux';
import Followers from './followers';
import { fetchUsers, fetchUser } from '../../actions/user_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions'


const mapStateToProps = state => {
    debugger
    let followers = state.entities.users[state.session.currentUser] ? state.entities.users[state.session.currentUser].follower_ids.map(id => state.entities.users[id]) : [];
    return {
    user: state.entities.users[state.session.currentUser], 
    followers: followers, 
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

export default connect(mapStateToProps, mapDispatchToProps)(Followers)