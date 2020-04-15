import React from 'react';

class FollowFeed extends React.Component {
    
    constructor(props){
        debugger
        super(props)
    }

    componentDidMount(){
        this.props.fetchFollows(),
        this.props.fetchBoards(),
        this.props.fetchPins()
    }

    render(){

        debugger
        if (this.props.user === undefined) {
            debugger
            return null 
        }
       let arr; 
       let array = []; 
        if (this.props.boards === undefined || this.props.boards[0] === undefined) {
            arr = <div></div>
        }
        else {
        arr = this.props.boards.map(board => {
            if(this.props.user.followed_board_ids.includes(board.id)){
            array = array.concat(board.pinPhotos)
            } 
        })
    }
    let arraypics = array.map(photoUrl=> {return <img className="follow-image" src={photoUrl}></img>})
     
        return(
            <div id="followfeed">
    {this.props.user.followed_board_ids.length === 0 ?  
    <div id="followfeedtext">your following feed is currently empty!</div>
    :
    arraypics}
            </div>
        )
    }



}




export default FollowFeed