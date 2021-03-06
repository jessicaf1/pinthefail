import {connect} from  'react-redux';
import FollowFeed from './follow_feed';
import {fetchFollows} from '../../actions/follow_actions';
import {fetchBoards} from '../../actions/board_actions';
import {fetchPins} from '../../actions/pin_actions'

const mapStateToProps = state => {
    let boards = Object.values(state.entities.boards);
    let followedboards = state.entities.users[state.session.currentUser] ? state.entities.users[state.session.currentUser].followed_board_ids.map(id => state.entities.boards[id]) : [];
    return {
    user: state.entities.users[state.session.currentUser], 
    followedboards: followedboards,
    boards: boards 
    }
} 

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
        fetchUser: id => dispatch(fetchUser(id)),
        fetchFollows: () => dispatch(fetchFollows()),
        fetchBoards: () => dispatch(fetchBoards()),
        fetchPins: () => dispatch(fetchPins()),
        createFollow: follow => dispatch(createFollow(follow)),
        deleteFollow: id => dispatch(deleteFollow(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowFeed)