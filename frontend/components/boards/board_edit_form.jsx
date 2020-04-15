// import React from 'react';
// import {Link, Route, HashRouter, Switch, withRouter} from 'react-router-dom';

// class BoardEditForm extends React.Component {
//     constructor(props){
//         super(props)
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleCancel = this.handleCancel.bind(this);
//         this.handleInput = this.handleInput.bind(this);
//         this.state = this.props.board 
//     }

// componentDidMount(){
//     this.props.fetchBoard(this.props.match.params.boardId) //there is no boardId here
// }

// handleInput(field){
//     return(e) =>{
//         this.setState = ({[field]: e.target.value})
//     }
// }

// handleSubmit(e){
//     e.preventDefault();
//     this.props.updateBoard(this.state)
//         .then(() => this.props.closeModal())
// }

// handleCancel(e){
//     e.preventDefault();
//     this.props.closeModal
// }


// render(){
//     return(
//         <div className="edit-board-form">
//          <form id="boardform">
//             <div>Create Board</div>
//             <label>
//                 Name 
//                 <input type="text" placeholder="test" value={this.state.name} onChange={this.handleInput('name')}/>
//             </label>
//             <label>
//                 Description 
//                 <input type="text" placeholder="What's your board about?" value={this.state.description} onChange={this.handleInput('description')}/>
//             </label>
//             <button onClick={this.handleCancel}>Cancel</button>
//             <button onClick={this.handleSubmit}>Save</button>
//             </form>
//         </div>
//     )
// }

// }

// export default BoardEditForm