import React, {Component} from "react";
import {NavLink, Link, withRouter} from 'react-router-dom';
import axios from 'axios';

class Navbar extends Component {
   state = {
	logged_in: localStorage.getItem('logged_in'),
	token: localStorage.getItem('token')
   }


   logout = () => {
	const {token} = this.state
	axios({
	   method: 'GET',
	   url: 'http://127.0.0.1:8000/api/logout',
	   headers: {
		'Authorization': `Bearer ${token}`
	   }
	}).then((res) => {
	   localStorage.clear()
	   this.props.history.push('/home')
	}).catch((error) => {
	   console.log(error.config);
	})
   }

   currentState() {
	const {logged_in} = this.state
	if (logged_in) {

		return (
		    <div className="nav-item dropdown">
			 <button className="btn btn-round btn-success dropdown-toggle" data-toggle="dropdown" id="dropdownMenuButton"
			    role="button" aria-haspopup="true" aria-expanded="false">My Profile</button>
			 <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
			    <Link className="dropdown-item" to="/user">Profile</Link>
			    <a role="button" className="dropdown-item" onClick={this.logout}>Logout</a>
			 </ul>
		    </div>
		)

	} else if (!logged_in) {
	   return (
		 <li className="nav-item">
		    <NavLink activeClassName='active' to="/sign-in" className="btn btn-round btn-outline-success">Sign
			 In</NavLink>
		 </li>
	   )
	}
   }

   render() {
	return (
	     <div>
		  <nav className="navbar navbar-expand-lg fixed-top navbar-dark" color-on-scroll="300">
		     <div className="container">
			  <div className="navbar-translate">
			     <NavLink className="navbar-brand" to="/">Fash Muyhee</NavLink>
			     <button className="navbar-toggler  navbar-burger" type="button"
					 data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo02"
					 aria-expanded="false" aria-label="Toggle navigation">
				  <span className="navbar-toggler-icon"/>
				  <span className="navbar-toggler-icon"/>
				  <span className="navbar-toggler-icon"/>
			     </button>
			  </div>
			  <div className="collapse navbar-collapse" id="navbarToggler">
			     <ul className="navbar-nav ml-auto">
				  <li className="nav-item">
				     <NavLink activeClassName='active' to="/" className="nav-link">Home</NavLink>
				  </li>
				  <li className="nav-item">
				     <NavLink activeClassName='active' to="/about" className="nav-link">About</NavLink>
				  </li>
				  <li className="nav-item">
				     <NavLink activeClassName='active' to="/service" className="nav-link"> Services</NavLink>
				  </li>
				  <li className="nav-item">
				     <NavLink activeClassName='active' to="/contact" className="nav-link">Contact</NavLink>
				  </li>
				  {this.currentState()}
			     </ul>
			  </div>
		     </div>
		  </nav>
	     </div>
	);

   }
}

export default withRouter(Navbar);