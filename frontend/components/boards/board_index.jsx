
import React from 'react';
import BoardIndexItem from './board_index_item';
import { withRouter } from 'react-router-dom';
// import BoardShowContainer from './board_show_container'
import UserShowContainer from '../../components/users/user_showpage_container'

class BoardIndex extends React.Component {
    constructor(props){
        super(props)
        debugger
        // this.sendToBoardShow = this.sendToBoardShow.bind(this)
    }

componentDidMount(){
    this.props.fetchBoards();
    this.props.fetchPins();
}

    // sendToBoardShow(e, board) {
    //     e.preventDefault();
    //     this.props.history.push(`/users/${this.props.currentUser.id}/${board.id}`)
    // }

    componentDidUpdate(prevProps){
        if (prevProps.boards.length !== this.props.boards.length){
            this.props.fetchBoards();
        }
    }


render(){
    
    let boards = this.props.boards.map(board=> {
        debugger
        if(this.props.demoUser === this.props.currentUser) {
            return <BoardIndexItem className="bi" board={board} key={board.id} currentUser={this.props.currentUser} openModal={this.props.openModal}/>
        } 
    })
    debugger
    return(
        <div>
            <UserShowContainer/> 
            <ul>
               
                <div className="board-index">

                {boards}
                {/* <BoardShowContainer/> */}
                </div>
            </ul>
        </div>
    )


}

}

export default withRouter(BoardIndex);