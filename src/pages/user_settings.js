import React, {Component} from 'react';
import User from '../components/user'
import axios from "axios/index";
import {withAlert} from 'react-alert';

let name, bio, address, email, phone, avatar;

class UserSettings extends Component {
   state = {
	name: name,
	email: email,
	avatar: avatar,
	bio: bio,
	address: address,
	phone: phone,
	error: null,
	message: null,
	loading: false,
   }

   handleTextChange = (e) => {
	this.setState({
	   [e.target.name]: e.target.value
	})
   }

   //validate
   formValidate = (e) => {
	e.preventDefault()
	const {error} = this.props.alert
	const {name} = this.state;

	if (name) {

	   this.setState({loading: true})
	   return this.handleSubmit()

	} else {
	   this.setState({error: 'All Fields required'})
	   error(this.state.error)

	}
   }

   //submit form
   handleSubmit = () => {
	const {name, bio, address, phone} = this.state;
	const token = localStorage.getItem('token');
	axios({
	   method: 'PUT',
	   url: `http://127.0.0.1:8000/api/update`,
	   data: {
		name: name,
		bio: bio,
		address: address,
		phone: phone
	   },
	   headers: {
		'accepts': 'application/json',
		'authorization': `Bearer ${token}`
	   }
	})
	    .then(() => {
		 this.setState({
		    loading: false,
		    message: 'Updated Successful',
		    error: null
		 })
		 this.props.alert.success(this.state.message)


	    }).catch(error => {
	   this.setState({loading: false})
	   if (error.response) {
		let message = error.response.data.error
		if (message === 'Unathourize') {
		   this.setState({message: 'Unauthorized'})
		   this.props.alert.error(this.state.message)
		}
	   }
	});

   }

   //get user details
   getUserProfile = (token) => {
	axios({
	   method: 'GET',
	   url: `http://127.0.0.1:8000/api/user`,
	   headers: {
		'accepts': 'application/json',
		'authorization': `Bearer ${token}`
	   }
	})
	    .then(res => {
		 const data = res.data.data
		 this.setState({
		    bio: data.bio,
		    name: data.name,
		    email: data.email,
		    phone: data.phone,
		    avatar: data.avatar,
		    address: data.address,
		 })
	    }).catch(error => {

	   console.log(error)
	});
   }

   componentDidMount() {
	this.getUserProfile(localStorage.getItem('token'))
   }

   render() {
	const {bio, name, email, avatar, phone, address} = this.state;

	return (
	    <User bio={bio} name={name} email={email} avatar={avatar}>
		 <div className="row">
		    <div className="col-md-6 ml-auto mr-auto">
			 <form className="settings-form">
			    <div className="form-group">
				 <label> Name</label>
				 <input type="text" className="form-control border-input" name="name" placeholder="Name"
					  onChange={this.handleTextChange} value={name}/>
			    </div>
			    <div className="form-group">
				 <label>Phone</label>
				 <input className="form-control border-input" placeholder="Phone" name="phone"
					  onChange={this.handleTextChange} value={phone}/>
			    </div>

			    <div className="form-group">
				 <label>Bio</label>
				 <textarea className="form-control textarea-limited"
					     placeholder="Bio..." rows="3"
					     maxLength="150" name="bio" onChange={this.handleTextChange} value={bio}/>
			    </div>

			    <div className="form-group">
				 <label>Address</label>
				 <textarea className="form-control textarea-limited"
					     placeholder="Address...." rows="3"
					     maxLength="150" name="address" onChange={this.handleTextChange} value={address}/>
			    </div>
			    <div className="text-center">
				 <button type="submit" className="btn btn-wd btn-info btn-round" disabled={this.state.loading}
					   onClick={this.formValidate}>
				    {this.state.loading ? 'Saving' : 'Save'}
				 </button>
			    </div>
			 </form>
		    </div>
		 </div>
	    </User>

	)
   }

}

export default withAlert(UserSettings);