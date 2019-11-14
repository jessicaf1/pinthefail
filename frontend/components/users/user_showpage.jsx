import React from 'react';
import NavBarContainer from '../navbar/nav_bar_container';
import {Link, Route, HashRouter, Switch, withRouter} from 'react-router-dom';
import UserDropDownContainer from './user_drop_down_container';
import BoardIndexContainer from '../boards/board_index_container'; 
import PinsIndexContainer from '../pins/pin_index_container';


class UserShowPage extends React.Component {
    constructor(props){
        debugger
        super(props)
        this.sendToEdit = this.sendToEdit.bind(this);
        this.sendToBoards = this.sendToBoards.bind(this);
        this.sendToPins = this.sendToPins.bind(this);
        this.sendToFollowers = this.sendToFollowers.bind(this);
        this.sendToFollowing = this.sendToFollowing.bind(this);
        this.state = this.props.user 
    }

// componentDidMount(){
//     debugger
//     this.props.fetchUsers()
//     // this.props.fetchUser(this.props.match.params.userId)
   
// }

sendToEdit(e){
    e.preventDefault();
    this.props.history.push(`/users/${this.props.user.id}/edit`)
}

    sendToBoards(e) {
        
        // e.preventDefault();
        this.props.history.push(`/users/${this.props.user.id}/boards`)
        debugger
    }

    sendToPins(e) {
        debugger
        // e.preventDefault();
        debugger
        this.props.history.push(`/users/${this.props.user.id}/pins`)
        debugger
    }

    sendToFollowers(){
        this.props.history.push(`/users/${this.props.user.id}/followers`)
    }

    sendToFollowing(){
        this.props.history.push(`/users/${this.props.user.id}/following`)
    }


render(){
    // if(this.props.user === undefined){
    //     return null 
    // }

    debugger 
    // let path = this.props.history.location.pathname.split('/').slice(this.props.history.location.pathname.split.length + 1).toString();
return(
    <div>
        <div className="showpage">
        <div className="showpage-clickable">
            <UserDropDownContainer />
            
            <Link to={`/users/${this.props.user.id}/edit`}>
                <img className="showpage-pencil" src={window.pencil} />
            </Link>
        </div>   
            <h1 id="showpage-header">{this.props.user.f_name} <span>   </span>{ this.props.user.l_name}</h1>
            <div id="s-follows">
            <div className="showpage-follows" onClick={this.sendToFollowers}>followers · </div> &nbsp; <div className="showpage-follows2" onClick={this.sendToFollowing}> following</div>
            </div>
            <div id="showpage-description">{this.props.user.location ? this.props.user.location + " · " + this.props.user.description : ''}</div>
            {this.props.user.photoUrl !== "" ? 
                 <div className="showpage-image2">
                    <img id="user-pic" src={this.props.user.photoUrl}/>
                </div> 
            : <img className="showpage-image" src={window.pinface} />}
            <div className="showpage-bps">
                <Link id="showpage-boards" to={`/users/${this.props.user.id}/boards`}>Boards</Link>
                &nbsp;
                &nbsp; 
                <Link id="showpage-pins" to={`/users/${this.props.user.id}/pins`}>Pins</Link>
            {/* <div id="showpage-boards" onClick={this.sendToBoards}>Boards</div>  */}
                &nbsp; 
            {/* <div id="showpage-pins" onClick={this.sendToPins}>Pins</div> */}
            </div>
        </div>
   
    {/* <img src={this.props.user.photoUrl} alt=""/> */}
    
    {/* {path === 'pins' ?  <PinsIndexContainer/> : <BoardIndexContainer/>}  */}
   
    </div>
)

}


}

export default withRouter(UserShowPage) 