import React from 'react';
import NavBarContainer from '../navbar/nav_bar_container';
import {Link, Route, HashRouter, Switch, withRouter} from 'react-router-dom';

class UserShowPage extends React.Component {
    constructor(props){
        super(props)
    }

componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId)
}

sendToEdit(e){
    e.preventDefault();
    this.props.history.push(`/users/:userId/edit`)
}


render(){

return(
    <div>
    <img className="image headerimage" src={window.pinface} />
    <Link to="/users/:userId/boards">Boards</Link>
    {/* <Link to="/users/:userId/edit"></Link> */}
    <button onClick={this.sendToEdit}>pencil image</button>
    
    </div>
)

}


}

export default UserShowPage