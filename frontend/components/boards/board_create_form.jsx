import React from 'react';
import {Link, Route, HashRouter, Switch, withRouter} from 'react-router-dom';

class BoardCreateForm extends React.Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(This)
        this.state = {name:''}
    }

handleSubmit(e){
    e.preventDefault();
    this.props.createBoard(this.state).then(()=>this.props.closeModal)
}

handleCancel(e){
    e.preventDefault();
    this.props.history.push(`/users/${this.props.currentUser.id}`);
}


render(){
    return(
        <div>
            <div>Create Board</div>
            <label>
                Name 
                <input type="text" placeholder="Like 'Guys in tanktops' or 'Jim Carrey Movies'"/>
            </label>
            <button onClick={this.handleCancel}>Cancel</button>
            <button onClick={this.handleSubmit}>Create</button>
        </div>
    )
}

}

export default BoardCreateForm