import React from 'react';
import {Link, Route, HashRouter, Switch, withRouter} from 'react-router-dom';

class BoardCreateForm extends React.Component {
    constructor(props){
        debugger
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.state = {name:'', description:''}
    }

// componentDidMount(){
//     //do i need a component did mount here if i am just creating and not actually fetching anything
// }

handleSubmit(e){
    e.preventDefault();
    this.props.createBoard(this.state)
    .then(()=>this.props.closeModal())
}

handleCancel(e){
    e.preventDefault();
    this.props.closeModal();
}


handleInput(field){
    return(e) => {
        this.setState({[field]: e.target.value})
    };
}

render(){
    return(
        <div>
            <form className="board-form">
            <div className="board-header">Create Board</div>
            <div id="x-cb" onClick={this.props.closeModal}>X</div>
            <label>
                Name 
                <input className="form-input" type="text" placeholder="Like 'Guys in tanktops' or 'Jim Carrey Movies'" value={this.state.name} onChange={this.handleInput('name')}/>
            </label>
            <label>
                Description 
                <input className="form-input" type="text" placeholder="A brief description" value={this.state.description} onChange={this.handleInput('description')}/>
            </label>
            <div className="board-form-buttons">
            <button className="b-f-button" onClick={this.handleCancel}>Cancel</button>
            <button className="b-f-button" onClick={this.handleSubmit}>Create</button>
            </div>
            </form>
        </div>
    )
}

}

export default withRouter(BoardCreateForm) 