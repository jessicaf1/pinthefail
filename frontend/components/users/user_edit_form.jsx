import React from 'react';
import {Link, Route, HashRouter, Switch, withRouter} from 'react-router-dom';

class UserEditForm extends React.Component {
    constructor(props){
        
        super(props);
        debugger
        // console.log(this.props.currentUser)
        this.state = {...this.props.currentUser, photoFile:null, photoUrl: null};
        debugger
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleInput = this.handleInput.bind(this);
        
    }

    componentDidMount(){
        this.props.fetchUser(this.props.match.params.userId)
    }

    handleInput(field){
        return(e) => {
            this.setState({[field]: e.target.value})
        };
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        debugger
        formData.append('user[f_name]', this.state.f_name); 
        formData.append('user[id]', this.state.id); 
        debugger
        formData.append('user[l_name]', this.state.l_name); 
        formData.append('user[username]', this.state.username); 
        formData.append('user[description]', this.state.description); 
        formData.append('user[location]', this.state.location); 
            if (this.state.photoFile) {
                formData.append('user[photo]', this.state.photoFile);
            }
        this.props.updateUser(formData).then(() => this.props.history.push(`/users/${this.props.currentUser.id}`))
     //then(alert("saved!"))
       
    }

    handleFile(e){
        // e.preventDefault; 
        //photoFile - file //photo_url - reader reading file for us 

        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
            this.setState({ photoUrl: reader.result, photoFile: file });

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ photoUrl: "", photoFile: null });
        }
    }

  //this.props.updateUser
    

    handleCancel(e){
        e.preventDefault();
        this.props.history.push(`/users/${this.props.currentUser.id}`);
    }


    render(){
        return(
        <div>   
        <div className="whole-page">
            <div className="left-span">
               
                    <Link to={`/users/${this.props.currentUser.id}/edit`}> 
                        <img className="edit-pencil" src={window.pencil} />
                    </Link>
                    <span id="span">Edit Profile</span>
                    </div>
           
    <div className="editForm">
        <div id="edit-header">Edit Profile</div>
        <div id="edit-sub">People on pinthefail will get to know you with the info below</div>
        <div className="edit-and-span">
                <div className="edit-top-button" >
                   
                   
                </div>
                </div>
       
    <form>
    <button className="edit-button" onClick={this.handleCancel}>Cancel</button>
                    <button className="edit-button" onClick={this.handleSubmit}>Done</button>
                    
        <label className="edit-photo">
            <div id="edit-photo-text"> </div>
            <br/> 
            <img className="showpage-image" id="edit-pinface" src={window.pinface} />
            <input type="file" onChange={this.handleFile}/>
        </label>
        <div className="names">
            <label className="name-input">
                First Name
                 <input className="edit-name" type="text" value={this.state.f_name} onChange={this.handleInput('f_name')} placeholder="Ex. Nancy"/>
            </label>
            &nbsp; 
            <label>
                Last Name 
            <input type="text" className="edit-name" value={this.state.l_name} onChange={this.handleInput('l_name')} placeholder="Ex. Smith"/>
            </label>
                    </div>
                    <br/>
            <label>
                Username 
                <br/>
                www.pinterest.com/
            <input type="text" className="edit-username" value={this.state.username} onChange={this.handleInput('username')} placeholder=""/>
            </label>
            <br/>
            <label id="label">
                  About Your Profile
            <input type="text" id="edit-description" value={this.state.description} onChange={this.handleInput('description')} placeholder="Write a little bit about yourself here"/>
              
            </label>
            <label>
                Location 
            <input type="text" id="edit-location" value={this.state.location} onChange={this.handleInput('location')} placeholder="Ex. NYC"/>
            </label>
    </form>
    </div>
                </div>
            </div>
        ) 
    } 

}

export default UserEditForm