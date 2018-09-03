import React, {Component} from "react";
import {NavLink, Redirect} from "react-router-dom";
import Footer from "../footer";
import Navbar from "../navbar";
import axios from "axios";
import {withAlert} from "react-alert";


class User extends Component {
   state = {
	imageUrl: null,
	selected: false,
	loading: false,
	avatar: null
   }

   handleImageChange = (e) => {
	e.preventDefault();

	let reader = new FileReader();
	const file = e.target.files[0];
	reader.onloadend = () => {
	   this.setState({
		avatar: file,
		imageUrl: reader.result,
		selected: true
	   });
	}
	reader.readAsDataURL(file)
   }

   uploadImage = () => {
	const {avatar} = this.state;
	const token = localStorage.getItem('token');
	const formData = new FormData();
	formData.append('avatar', avatar, avatar.name);
	axios({
	   method: 'POST',
	   url: "http://127.0.0.1:8000/api/avatar_upload",
	   data: formData,
	   headers: {
		'authorization': `Bearer ${token}`,
		'content-type': 'application/json'
	   },
	}).then((res) => {
	   this.setState({
		selected: false,
		imageUrl: res.data.image
	   })
	   this.props.alert.success('Image Uploaded')
	}).catch(error => {
	   if (error.response) {
		console.log(error.response.data);
		console.log(error.response.status);
		console.log(error.response.headers);
	   } else if (error.request) {

		console.log(error.request);
	   } else {
		console.log('Error', error.message);
	   }
	   console.log(error.config);
	})
   }

   currentPage() {
	let {imageUrl, selected} = this.state;
	let imagePreview = null;
	if (imageUrl) {
	   imagePreview = (<img src={imageUrl} alt="avatar"
					className="img-circle img-no-padding img-responsive" style={{
		'height': '150px',
		'width': '-webkit-fill-available'
	   }}/>);
	} else {
	   imagePreview = (<img src={this.props.avatar} alt="avatar"
					className="img-circle img-no-padding img-responsive" style={{
		'height': '150px',
		'width': '-webkit-fill-available'
	   }}/>);
	}

	if (!localStorage.getItem('logged_in')) {
	   return (
		 <Redirect to="/sign-in"/>
	   )
	} else {
	   return (
		 <div>
		    <div>
			 <Navbar/>
		    </div>
		    <div className="wrapper">
			 <div className="page-header page-header-xs" data-parallax="true"
				style={{"backgroundImage": `url(${require('../../images/profileBg.jpg')})`}}>
			    <div className="filter"/>
			 </div>
			 <div className="section profile-content">
			    <div className="owner">
				 {/*to show both upload and cancel image*/}
				 {
				    selected ?
					  <div className="imagePicker ml-2" onClick={this.uploadImage}>
					     <button className='btn btn-just-icon btn-success'>
						  <i className="nc-icon lg nc-cloud-upload-94"/>
					     </button>
					  </div>
					  : <div className="ml-3"/>
				 }
				 {
				    selected ?
					  <div className="imagePicker imageCancel ml-2" onClick={() => this.setState({
					     file: null,
					     imageUrl: null,
					     selected: false,
					  })}>
					     <button className='btn btn-just-icon btn-outline-danger'>
						  <i className="nc-icon lg nc-simple-remove"/>
					     </button>
					  </div>
					  : <div className="ml-3"/>
				 }

				 <div className="avatar">
				    {imagePreview}
				 </div>
				 <div className="imagePicker">
				    <button className='btn btn-just-icon btn-danger'>
					 <i className="nc-icon lg nc-camera-compact"/>
				    </button>
				    <input type="file" className='btn btn-just-icon btn-danger' name='avatar' accept='image/*'
					     title='Select Image' onChange={(e) => this.handleImageChange(e)}/>
				 </div>
				 <div className="name">
				    <h4 className="title">{this.props.name}<br/></h4>
				    <h6 className="description text-lowercase">{this.props.email}</h6>
				 </div>
			    </div>

			    <div className="container">
				 <div className="row">
				    <div className="col-md-6 ml-auto mr-auto text-center">
					 <p>{this.props.bio}</p>
					 <br/>
					 <div className="nav-tabs-navigation">
					    <div className="nav-tabs-wrapper">
						 <ul className="nav nav-tabs" role="tablist">
						    <li className="nav-item">
							 <NavLink className="nav-link" activeClassName="active" data-toggle="tab"
								    to="/user" role="tab">Profile</NavLink>
						    </li>
						    <li className="nav-item">
							 <NavLink className="nav-link" activeClassName="active" data-toggle="tab"
								    to="/user_settings" role="tab">Edit Profile</NavLink>
						    </li>
						 </ul>
					    </div>
					 </div>
				    </div>
				 </div>
				 <br/>

				 <div>
				    {this.props.children}
				 </div>

			    </div>
			 </div>
		    </div>
		    <div>
			 <Footer/>
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

export default withAlert(User);
