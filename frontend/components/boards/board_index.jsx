
import React from 'react';
import BoardIndexItem from './board_index_item';


class BoardIndex extends React.Component {
    constructor(props){
        super(props)
    }

componentDidMount(){
    this.props.fetchBoards();
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