import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {withAlert} from "react-alert";
import axios from 'axios';

class SignUp extends Component {
   state = {
	username: '',
	email: '',
	password: '',
	message: null,
	loading: false
   };


   //email validating
   validateEmail = email => {
	let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
   }

   //handles the onclick event for submitting the form
   handleSubmit = () => {

	//	submitting the form
	axios({
	   method: 'POST',
	   url: `http://127.0.0.1:8000/api/register`,
	   data: {
		name: this.state.username,
		email: this.state.email,
		password: this.state.password
	   },
	   headers: {
		'accepts': 'application/json',

	   }
	})
	    .then(() => {
		 this.setState({loading: false})
		 this.setState({message: 'Login Now'})
		 this.props.alert.success(this.state.message)
		 this.props.history.push('/sign-in')

	    }).catch(error => {
	   this.setState({loading: false})
	   if (error.response) {

		let message = error.response.data.error
		if (message === 'Unathourize') this.setState({message: 'Username or Password not correct'})
	   }
	});

   }

   //determine loading state
   currentState() {
	if (this.state.loading) {
	   return (
		 <button type="button" className="btn btn-danger btn-block btn-round" disabled>
		    Loading
		 </button>
	   )
	} else {
	   return (
		 <button type="button" className="btn btn-danger btn-block btn-round" onClick={this.formValidate}>Sign
		    Up</button>
	   )
	}
   }

   //handles text change
   handleTextChange = e => {
	this.setState({
	   [e.target.name]: e.target.value
	})
   }

   //validate the form
   formValidate = () => {
	const {error} = this.props.alert

	if (this.state.email && this.state.password && this.state.username) {
	   if (this.validateEmail(this.state.email)) {
		if (this.state.password.length < 8) {
		   this.setState({message: 'Password too short,must be atleast 8 character'})
		   error(this.state.message)

		} else {
		   this.setState({loading: true})
		   return this.handleSubmit()
		}
	   } else {
		this.setState({message: 'Enter a valid email'})
		error(this.state.message)

	   }
	} else if (!this.state.email && this.state.password && this.state.username) {
	   this.setState({message: 'Email required'})
	   error(this.state.message)

	} else if (this.state.email && !this.state.password && this.state.username) {
	   this.setState({message: 'Password required'})
	   error(this.state.message)

	} else if (this.state.email && this.state.password && !this.state.username) {
	   this.setState({message: 'Username required'})
	   error(this.state.message)

	} else {
	   this.setState({message: 'All Fields required'})
	   error(this.state.message)

	}

   }

   render() {
	return (
	    <div className="page-header" style={{"backgroundImage": `url(${require('../../images/login_image.jpg')})`}}>
		 <div className="container">
		    <div className="row">
			 <div className="col-lg-4 ml-auto mr-auto">
			    <div className="card card-register bg-dark">
				 <div className="mb-3 mt-1 align-self-center">
				    <img src={require('../../images/favicon.ico')} alt="logo"/>
				 </div>
				 <form className='register-form'>
				    <input type="text" className="form-control" placeholder="Username" name="username"
					     value={this.state.username} onChange={this.handleTextChange}/>
				    <br/>
				    <input type="email" className="form-control" placeholder="Email" name="email"
					     value={this.state.email} onChange={this.handleTextChange}/>
				    <br/>
				    <input type="password" className="form-control" placeholder="Password" name="password"
					     value={this.state.password} onChange={this.handleTextChange}/>
				    <div>{this.currentState()}</div>
				 </form>

				 <div className="forgot">
				    <Link to='/sign-in' className='btn btn-link btn-sm btn-danger mt-0'>Already have an account?
					 Sign In</Link>
				    <Link to='/' className="btn btn-link btn-sm btn-danger mt-0">Go Home</Link>
				 </div>
			    </div>
			 </div>
		    </div>
		 </div>
	    </div>
	)
   }

}

export default withAlert(SignUp);