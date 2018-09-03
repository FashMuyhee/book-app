import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {withAlert} from "react-alert";
import axios from 'axios';

class SignIn extends Component {
   state = {
	email: '',
	password: '',
	message: null,
	loading: false
   }
   //email validating
   validateEmail = (email) => {
	let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
   }

   handleSubmit = () => {

	axios({
	   method: 'POST',
	   url: `http://127.0.0.1:8000/api/login`,
	   data: {
		email: this.state.email,
		password: this.state.password
	   },
	   headers: {
		'accepts': 'application/json',

	   }
	})
	    .then(res => {
		 this.props.alert.success('Authenticated')
		 this.setState({loading: false})
		 const token = res.data.success.access_token
		 localStorage.setItem('logged_in', true);
		 localStorage.setItem('token', token);
		 this.props.history.push(`/user`)

	    }).catch(error => {
	   this.setState({loading: false})

	   if (error.response) {

		let message = error.response.data.error
		if (message === 'Unathourize') {
		   this.setState({message: 'Username or Password not correct'})
		   this.props.alert.error(this.state.message)

		}
	   }
	});
   }

   //determine loading state
   currentBtnState() {
	if (this.state.loading) {
	   return (
		 <button type="button" className="btn btn-danger btn-block btn-round" disabled>
		    Loading
		 </button>
	   )
	} else {
	   return (
		 <button type="button" className="btn btn-danger btn-block btn-round" onClick={this.formValidate}>Sign
		    In</button>
	   )
	}
   }

   handleTextChange = e => {
	this.setState({
	   [e.target.name]: e.target.value
	})
   }

   formValidate = () => {
	const {error} = this.props.alert
	if (this.state.email && this.state.password) {
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
	} else if (!this.state.email && this.state.password) {
	   this.setState({message: 'Email required'})
	   error(this.state.message)

	} else if (this.state.email && !this.state.password) {
	   this.setState({message: 'Password required'})
	   error(this.state.message)

	} else {
	   this.setState({message: 'Email and Password required'})
	   error(this.state.message)

	}

   };

   currentPage() {
	if (localStorage.getItem('logged_in')) {
	   return (
		 <Redirect to="/user"/>
	   )
	} else {
	   return (
		 <div className="page-header"
			style={{"backgroundImage": `url(${require('../../images/login_image.jpg')})`}}>
		    <div className="container">
			 <div className="row">
			    <div className="col-lg-4 ml-auto mr-auto">
				 <div className="card card-register bg-dark">
				    <div className="mb-3 mt-1 align-self-center">
					 <img src={require('../../images/favicon.ico')} alt="logo"/>
				    </div>
				    <form className='register-form' autoComplete="true">
					 <input type="email" className="form-control" placeholder="Email" name="email"
						  value={this.state.email} onChange={this.handleTextChange}/>
					 <br/>
					 <input type="password" className="form-control" placeholder="Password" name="password"
						  value={this.state.password} onChange={this.handleTextChange}/>
					 <div>{this.currentBtnState()}</div>
				    </form>
				    <div className="forgot">
					 <button className="btn btn-link btn-sm btn-danger">Forgot password?</button>
				    </div>
				    <div className="forgot">
					 <Link to='/sign-up' className='btn btn-link btn-sm btn-danger mt-0'>Yet to have an
					    account? Sign Up</Link>
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


   render() {

	return (
	    <div>
		 {this.currentPage()}
	    </div>
	)

   }


}

export default withAlert(SignIn);