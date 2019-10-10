import React from 'react';
import {Link, Route, HashRouter, Switch, withRouter} from 'react-router-dom';

class CreatePinForm extends React.Component {
    constructor(props){
        
        super(props);
        
        // console.log(this.props.currentUser)
        this.state = {...this.props.pin, photoFile:null, photoUrl: null};
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
        formData.append('pin[id]', this.state.id); 
        formData.append('pin[link_url]', this.state.name); 
        if (this.state.photoFile) {
            formData.append('pin[photo]', this.state.photoFile);
        }
     this.props.createPin(formData).then(() => this.props.history.push(`/users/${this.props.user.id}/pins`))
     //(alert("pin saved!"))
    }

    handleFile(e){
        // e.preventDefault; 
        //photoFile - file //photo_url - reader reading file for us 

        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () => {
            this.setState({ photoUrl: reader.result, photoFile: file });
        };
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
            <form className="pin-cf">
                    {/* <div className="box"></div> */}
                    <button className="pin-button" onClick={this.handleSubmit}>Save</button>
                        <label className="pin-cf-t">
                        <input placeholder="Add your title" className="pin-cf-tb" type="text" value={this.state.name} onChange={this.handleInput('name')}/>
                        </label>
                    <input type="file" className="file" onChange={this.handleFile}/>
                    <div className="uploadpic">Upload picture here</div>
                    <img className="file-pic"src={this.state.photoUrl} alt=""/>
            </form>
        </div>
        ) 
    } 

}

export default CreatePinForm;