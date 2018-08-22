import React from "react";
import {NavLink} from 'react-router-dom';

function Navbar(){
   return (
	 <div>
	    <nav className="navbar navbar-expand-lg fixed-top navbar-dark" color-on-scroll="300">
		 <div className="container">
		    <div className="navbar-translate">
			 <NavLink className="navbar-brand" to="/">Fash Muyhee</NavLink>
			 <button className="navbar-toggler navbar-toggler-right navbar-burger" type="button"
				   data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo02"
				   aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-bar"></span>
			    <span className="navbar-toggler-bar"></span>
			    <span className="navbar-toggler-bar"></span>
			 </button>
		    </div>
		    <div className="collapse navbar-collapse navbar-dark" id="navbarToggler">
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
				 <NavLink activeClassName='active'to="/contact" className="nav-link">Contact</NavLink>
			    </li>
			    <li className="nav-item">
				 <NavLink activeClassName='active' to="/sign-in" className="nav-link">Sign In</NavLink>
			    </li>
			 </ul>
		    </div>
		 </div>
	    </nav>

	 </div>
   );

}
export default Navbar;