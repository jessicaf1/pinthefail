import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleSubmitdemoUser = this.handleSubmitdemoUser.bind(this);
    //this.renderEmailblank = this.renderEmailblank.bind(this)
    this.handledemoUser = this.handledemoUser.bind(this)
    }

handleInput(field) {
    
    return(e) => {
        this.setState({ [field]: e.target.value} );
    }
}

componentWillUnmount(){
    this.props.clearSessionErrors();
}

handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(this.props.closeModal);
}

handledemoUser(e){
    e.preventDefault();
    this.setState({ email:'', password:''} )
    let demoUserEmail = 'bwaldorf@aol.com'.split("");
    let demoPassword = 'nancy5'.split("")

    const animateLogin = () => {
        const int = setInterval(()=> {
            let email = this.state.email;
            let password = this.state.password;
            let times = 0;
            
            if (times < demoUserEmail.length){
                email += demoUserEmail.shift();
                times += 1;
                this.setState({email: email})
            } else if (times < (demoPassword.length + demoUserEmail.length)){
                password += demoPassword.shift();
                times += 1;
                this.setState({password: password});
            } else {
                clearInterval(int);
                this.props.processForm({email: 'bwaldorf@aol.com', password: 'nancy5'}).then(this.props.closeModal)
            }
        }, 30);
    }
animateLogin();
}

    handleSubmitdemoUser(e) {
        debugger
        e.preventDefault();
        debugger
        this.props.processForm(this.props.demouser).then(this.props.closeModal);
    }

  

componentDidMount(){
    document.getElementById('modal-background').removeEventListener('click', this.props.closeModal)
    //remove event listener for class of modal background 
}

// addSpinner(){
//     return <div class="loader">Loading...</div>
// }

// renderErrors() {
//     return (
//         <div className="errors">
//         <ul>
//             {this.props.errors.map((error, index)=> (
//                 <li className="error"key = {index}>{error}</li>
//             ))} 
//         </ul>
//         </div>
//     );
//     } 

    errorExists(error){
        if(this.props.errors.includes(error) && error=== "Email can't be blank"){
            return "Hmm...that doesn't look like a valid email address!"
        }
        if (this.props.errors.includes(error) && error === "Password is too short (minimum is 6 characters)" && this.props.formType === 'login') {
            return "The password you entered is incorrect."
        }
        if (this.props.errors.includes(error) && error === "invalid Email and/or Password" && this.props.formType === 'login') {
            return "Invalid login!"
        }
        if (this.props.errors.includes(error) && error === "Password is too short (minimum is 6 characters)" && this.props.formType === 'signup') {
            return "Your password is too short! You need 6+ characters."
        }
        if (this.props.errors.includes(error) && error === "invalid user") {
            return "Your password is too short! You need 6+ characters"
        }
    }

   render(){
       const emailError = "Email can't be blank";
       const passwordError = "Password is too short (minimum is 6 characters)"
       const genericError = "invalid Email and/or Password"
       const genericError2 = "invalid user"

       let disp;
       let buttontext; 
       if (this.props.formType === 'login'){
            disp = (<div> 
                By continuing, you agree to pinthefail's Terms of Service. 
                <br/>
                <br/>
                <div className="spanner">Not on pinthefail yet?  <div className="footer-button" onClick={this.props.otherForm}> Sign Up</div>
                </div>
            </div>) 
            buttontext = 'Sign Up'
       }
       else {
           disp = (<div>
               By continuing, you agree to pinthefail's Terms of Service. 
               <br/> 
               <br/>
               <div className="spanner">Already on pinthefail?  <div className="footer-button" onClick={this.props.otherForm}> Log In</div>
               </div>
           </div>)
           buttontext = 'Log In'
       }

      let demoU;
      if (this.props.formType === 'login') {
          demoU = <input className="session-button" type="submit" value="demo user login" onClick={this.handledemoUser} />
      }
    return(
       

        <div className="form-all">
            <button id="left" onClick={this.props.otherForm}>{buttontext}</button>
            <form className="signup-form" onSubmit={this.handleSubmit}>
                <img className="image headerimage" src={window.logo} />
                <div className="headerlogo">Welcome to Pinthefail </div> 
                <h4 className="headersublogo">find new things to make fun of</h4>
                     <div className="x" onClick={this.props.closeModal}>X</div>

           <div className="input-fields">
                <label className="slabel">
                    <input type="email" className="field" placeholder="email" value={this.state.email} onChange={this.handleInput('email')}/>
                      <p className="err">{this.errorExists(emailError)}</p> 
                        <p className="err">{this.errorExists(genericError)}</p>
                </label>
                <label>
                    <input type="password" className="field" placeholder="password" value={this.state.password} onChange={this.handleInput('password')}/>
                        <p className="err">{this.errorExists(passwordError)}</p> 
                        <p className="err">{this.errorExists(genericError2)}</p>
                </label>
            </div>
            <div className="bottom">
                <div className="sub-buttons">
                        <input className="session-button" type="submit" value={this.props.formType}/>
                        {demoU}
                </div>
               
                <div className="footer">
                {disp}
                </div>
            </div>
            </form>
            <footer className="footergit">
            <a href="https://github.com/jessicaf1/pinthefail">find me on git!</a>
            </footer>
        </div>
        )
    } 
}

export default withRouter(SessionForm); 