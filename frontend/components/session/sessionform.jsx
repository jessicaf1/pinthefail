import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
    this.handleSubmit = this.handleSubmit.bind(this)
    }

handleInput(field) {
    debugger
    return(e) => {
        this.setState({ [field]: e.target.value} );
    }
}

handleSubmit(e) {
    debugger
    e.preventDefault();
    this.props.processForm(this.state).then(this.props.closeModal);
}

// render() {
    // let otherLink;
    // if(this.props.formType === 'Sign Up'){
    //     otherLink = <Link to="/login">Log In</Link>
    // }
    // else {
    //     otherLink = <Link to="/signup">Sign Up</Link>
    // }

renderErrors() {
    return (
        <ul>
            {this.props.errors.map((error, index)=> (
                <li key = {i}>{error}</li>
            ))} 
        </ul>
    );
    } 
   render(){
    return(
        <div className="form-all">
            <form className="signup-form" onSubmit={this.handleSubmit}>
            either {this.props.formType} or {this.props.otherForm}
            <div onClick={this.props.closeModal}>X</div>
            {this.renderErrors()}
                <label>
                    <input type="text" placeholder="username" value={this.state.username} onChange={this.handleInput('username')}/>
                </label>
                <label>
                    <input type="text" placeholder="email" value={this.state.email} onChange={this.handleInput('email')}/>
                </label>
                <label>
                    <input type="password" placeholder="password" value={this.state.password} onChange={this.handleInput('password')}/>
                </label>
                <input className="session-button" type="submit" value={this.props.formType}/>
            </form>

        </div>
        )
    } 
}

export default withRouter(SessionForm); 