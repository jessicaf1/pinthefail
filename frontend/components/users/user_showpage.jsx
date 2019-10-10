import React from 'react';
import NavBarContainer from '../navbar/nav_bar_container';
import {Link, Route, HashRouter, Switch, withRouter} from 'react-router-dom';
import UserDropDownContainer from './user_drop_down_container';
import BoardIndexContainer from '../boards/board_index_container'; 
import PinsIndexContainer from '../pins/pin_index_container'

class UserShowPage extends React.Component {
    constructor(props){
        debugger
        super(props)
        this.sendToEdit = this.sendToEdit.bind(this);
        this.sendToBoards = this.sendToBoards.bind(this);
        this.sendToPins = this.sendToPins.bind(this);
        this.state = this.props.user 
    }

// componentDidMount(){
//     debugger
//     this.props.fetchUser(this.props.match.params.userId)
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



render(){
    debugger 
    let path = this.props.history.location.pathname.split('/').slice(this.props.history.location.pathname.split.length + 1).toString();
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
            <div className="showpage-bps">
            <div id="showpage-boards" onClick={this.sendToBoards}>Boards</div> 
                &nbsp; 
            <div id="showpage-pins" onClick={this.sendToPins}>Pins</div>
            </div>
        </div>
    <img className="showpage-image" src={window.pinface} />
    {/* <img src={this.props.user.photoUrl} alt=""/> */}
    
    {path === 'pins' ?  <PinsIndexContainer/> : <BoardIndexContainer/>} 
   
    </div>
)

}


}

export default withRouter(UserShowPage) 