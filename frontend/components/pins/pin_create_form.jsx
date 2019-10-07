import React from 'react';
import {Link, Route, HashRouter, Switch, withRouter} from 'react-router-dom';

class PinCreateForm extends React.Component {
    constructor(props){
        
        super(props);
        
        // console.log(this.props.currentUser)
        this.state = {...this.props.currentUser, photoFile:null, photoUrl: null};
        debugger
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleInput = this.handleInput.bind(this);
        
    }

    handleInput(field){
        return(e) => {
            this.setState({[field]: e.target.value})
        };
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('pin[name]', this.state.name); 
        if (this.state.photoFile) {
            formData.append('pin[photo]', this.state.photoFile);
        }
     this.props.createPin(formData).then(alert("saved!"))
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
    

    handleCancel(e){
        e.preventDefault();
        this.props.closeModal;
    }


    render(){
        return(
        <div>   
            <form>
                <label>
                    Title 
                    <input type="text" value={this.state.name} onChange={this.handleInput('name')}/>
                    <input type="file" onChange={this.handleFile}/>
                </label>
            <button className="edit-button" onClick={this.handleSubmit}>Save</button>
            </form>
        </div>
        ) 
    } 

}

export default CreatePinForm