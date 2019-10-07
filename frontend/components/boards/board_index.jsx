
import React from 'react';
import BoardIndexItem from './board_index_item';
import NavBarContainer from '../navbar/nav_bar_container'; 

class BoardIndex extends React.Component {
    constructor(props){
        super(props)
    }

componentDidMount(){
    this.fetchCorrectBoards;
}

fetchCorrectBoards(){
    this.props.fetchBoards().filter(board=> board.user_id === this.props.currentUser.id)
}


render(){


    let boards = this.props.boards.map(board=> {
        return <BoardIndexItem board={board} key={board.id} openModal={this.props.openModal}/>
    })

    return(
        <div>
            <ul>
                <div>hi i'm the board index page</div>
                {boards}
            </ul>
        </div>
    )


}

}

export default BoardIndex;