
import React, { Component } from 'react';
import axios from 'axios';


import { Link } from 'react-router-dom';

class Contact_form extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
                inputEmail: '',
                inputName: '',
                inputMessage: ''
        

        };

        this.sendMessage = this.sendMessage.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);

    }

    sendMessage(event){
        event.preventDefault();
        console.log(this.state);
        axios.post('/api/sendMessage', this.state)
        .then(res => console.log(res))
        .catch( err => console.log(err) )


    }

    handleChangeName (event){
       this.setState({ inputName : event.target.value })
    }

    handleChangeEmail (event){
        this.setState({ inputEmail : event.target.value })
     }

     handleChangeMessage (event){
        this.setState({ inputMessage : event.target.value })
     }

    componentDidMount() {
        fetch('/api/projects').then(res => res.json())
            .then(projects => this.setState({ projects }, () => console.log('fetched...', projects)));
    }

    render() {


        return (


<div className="card shadow mb-4">
<div className="card-header py-3">
    <h6 className="m-0 font-weight-bold text-primary">Contact Me</h6>
</div>
<div className="card-body">
    <div className="row">
        <h6> How can I help? </h6><h6> tell me about your project and I will give you a tooght. OR Just say Hi ! </h6>
    </div>
    <br />
    <form onSubmit={ this.sendMessage }>
<div className="form-group row">
<label htmlFor="inputEmail" className="col-sm-2 col-md-2 col-form-label" >Email *</label>
<div className="col-sm-10 col-md-8">
<input type="email" className="form-control" id="inputEmail" placeholder="Email" value={this.state.inputEmail} onChange={this.handleChangeEmail} />
</div>
</div>
<div className="form-group row">
<label htmlFor="inputName" className="col-sm-2 col-md-2 col-form-label">Name *</label>
<div className="col-sm-10 col-md-8">
<input type="text" className="form-control" id="inputName" placeholder="Name" value={this.state.inputName} onChange={this.handleChangeName} />
</div>
</div>

<div className="form-group row">
<label htmlFor="inputMessage" className="col-sm-2 col-md-2 col-form-label">Message *</label>
<div className="col-sm-10 col-md-8">
<textarea type="text" className="form-control" id="inputMessage" value={this.state.inputMessage}  placeholder="Message"  onChange={this.handleChangeMessage}  ></textarea>
</div>
</div>
<div className="form-group row">
<div className="col col-md-4" ></div>
<div className="col-sm-10 col-md-8 ">
<button type="submit" className="btn btn-primary" onSubmit={ this.sendMessage } >Send Message</button>
</div>
</div>
</form>
    </div>
</div>
        );
    }
}

export default Contact_form;