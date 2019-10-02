import React from 'react';
import { Link } from 'react-router-dom';

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
    return(e) => {
        this.setState({ [field]: e.target.value} );
    }
}

handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
    .then( ()=> this.props.history.push('/'));
}

render() {
    let otherLink;
    if(this.props.formType === 'Sign Up'){
        otherLink = <Link to="/login">Log In</Link>
    }
    else {
        otherLink = <Link to="/signup">Sign Up</Link>
    }

    return(
        <div>
        <h2>{this.props.formType}</h2>
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" placeholder="username" value={this.state.username} onChange={this.handleInput('username')}/>
                </label>
                <label>
                    <input type="text" placeholder="email" value={this.state.email} onChange={this.handleInput('email')}/>
                </label>
                <label>
                    <input type="password" placeholder="password" value={this.state.password} onChange={this.handleInput('password')}/>
                </label>
                <input type="submit" value={this.props.formType}/>
            </form>
            <h4>{otherLink}</h4>
        </div>
        )

    }
}

export default SessionForm; 