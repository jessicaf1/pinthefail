import React from 'react';
import FollowedBoardItem from './followed_board_item';
import BoardIndexItem from '../boards/board_index_item';
import {Link, Route, HashRouter, Switch, withRouter} from 'react-router-dom';


class FollowingBoards extends React.Component {

    constructor(props){
        debugger
        super(props)
    }

    componentDidMount(){
        // this.props.fetchUser(this.props.match.params.userId),
        this.props.fetchFollows(),
        this.props.fetchBoards(),
        this.props.fetchPins()
        // this.props.fetchUsers()
    }

    componentDidUpdate(prevProps){
        if (prevProps.boards.length !== this.props.boards.length){
            this.props.fetchBoards();
        }
    }


    render(){
        if (this.props.user === undefined) {
            debugger
            return null 
        }
       let arr; 
        if (this.props.boards === undefined || this.props.boards[0] === undefined) {
            arr = <div></div>
        }
       
        else {
        arr = this.props.boards.map(board => {
            if(this.props.user.followed_board_ids.includes(board.id)){
            return <BoardIndexItem board={board} currentUser={this.props.user}/>
            } 
        })
    }
        return(
            
            <div className="follow-list">
                  <div id="num-follows">{arr.length} </div>
                    <div id="followers-followers">followed boards</div>
                <div className="follow-links">
                        <Link className="follow-link" to={`/users/${this.props.user.id}/following`}>
                            <div className="follow-link">People</div>    
                        </Link> 
                        <Link className="follow-link" to={`/users/${this.props.user.id}/followingboards`}>Boards</Link> 
               
                </div>
                <div className="num-follows-h">
                  
                </div>
                <div id="follow-array">
                {arr}
                </div>
            </div>
        )
    }


}

export default FollowingBoards; 