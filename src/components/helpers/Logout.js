import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

// logout function
export class Logout extends Component {

    Logout(){

	//do axios here if successful clear localstorage

	const token = localStorage.getItem('token');
	axios({
	   method:'GET',
	   url:`http://127.0.0.1:8000/api/logout`,
	   headers:{
		'accepts': 'application/json',
		'authorization': `Bearer ${token}`
	   }
	}).then( ()=> {
	   localStorage.clear()
	   return(
		 <Link className="dropdown-item" to="/">Logout</Link>
	   )
	})

   }

   render(){
	return(
	    <div onClick={this.Logout}>
		 <Link className="dropdown-item" to="/">Logout</Link>
	    </div>
	)
   }

}


