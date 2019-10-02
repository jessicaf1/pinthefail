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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitdemoUser = this.handleSubmitdemoUser.bind(this);
    }

handleInput(field) {
    
    return(e) => {
        this.setState({ [field]: e.target.value} );
    }
}

handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(this.props.closeModal);
}

    handleSubmitdemoUser(e) {
        debugger
        e.preventDefault();
        debugger
        this.props.processForm(this.props.demouser).then(this.props.closeModal);
    }




renderErrors() {
    return (
        <div className="errors">
        <ul>
            {this.props.errors.map((error, index)=> (
                <li key = {index}>{error}</li>
            ))} 
        </ul>
        </div>
    );
    } 
   render(){
       let disp;
       let buttontext; 
       if (this.props.formType === 'login'){
            disp = (<div> 
                By continuing, you agree to pinthefail's Terms of Service. Not on pinthefail yet? 
                <div onClick={this.props.otherForm}> Sign Up 
                </div>
            </div>) 
            buttontext = 'Sign Up'
       }
       else {
           disp = (<div>
               By continuing, you agree to pinthefail's Terms of Service. Already on pinthefail?
                <div onClick={this.props.otherForm}> Log In
                </div>
           </div>)
           buttontext = 'Log In'
       }

      let demoU;
      if (this.props.formType === 'login') {
          demoU = <input className="session-button" type="submit" value="demo user login" onClick={this.handleSubmitdemoUser} />
      }
       
    return(
        <div className="form-all">
            <button id="left" onClick={this.props.otherForm}>{buttontext}</button>
            <form className="signup-form" onSubmit={this.handleSubmit}>
                <img className="image headerimage" src={window.logo} />
                <div className="headerlogo">Welcome to Pinthefail </div> 
                <h4 className="headersublogo">find new things to make fun of</h4>
                     <div className="x" onClick={this.props.closeModal}>X</div>
            {this.renderErrors()}
                <label>
            
                    <input type="text" className="field" placeholder="username" value={this.state.username} onChange={this.handleInput('username')}/>
                </label>
                <label>
                    <input type="text" className="field" placeholder="email" value={this.state.email} onChange={this.handleInput('email')}/>
                </label>
                <label>
                    <input type="password" className="field" placeholder="password" value={this.state.password} onChange={this.handleInput('password')}/>
                </label>
                <div className="buttons">
                <input className="session-button" type="submit" value={this.props.formType}/>
               {demoU}
                </div>
                <div className="footer">
                {disp}
                </div>
            </form>
          
        </div>
        )
    } 
}

export default withRouter(SessionForm); 