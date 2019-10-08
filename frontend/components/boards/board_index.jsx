
import React from 'react';
import BoardIndexItem from './board_index_item';


class BoardIndex extends React.Component {
    constructor(props){
        super(props)
        debugger
    }

componentDidMount(){
    this.props.fetchBoards();
}


render(){
    debugger
    let boards = this.props.boards.map(board=> {
        return <BoardIndexItem board={board} key={board.id} pinIds={board.pin_ids} pins={this.props.pins} openModal={this.props.openModal}/>
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