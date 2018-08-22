import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class SignUp extends Component{
   state={
	username:'',
	email:'',
	password:'',
	message:null,
	loading:false
   };


   //handles the onclick event for submitting the form
   handleSubmit = (e) => {
	e.preventDefault()
	if(this.formValidate()){

	   //	submitting the form
	   axios({
		method:'POST',
		url:`http://127.0.0.1:8000/api/register`,
		data:{
		   name:this.state.username,
		   email:this.state.email,
		   password:this.state.password
		},
		headers:{
		   'accepts': 'application/json',

		}
	   })
	   .then( res =>{

	      this.setState({message:'Login Now'})
		this.props.history.push('/sign-in')

	   }).catch( error =>{

		console.log(error)
	   });
	}else{
	   return false;
	}
   }

   //determine loading state
   currentState(){
	if(this.state.loading){
	   return(
		 <button type="button" className="btn btn-danger btn-block btn-round" disabled>
		    <span><i className="nc-icon lg nc-refresh-69 spin"/></span>Loading
		 </button>
	   )
	}else{
	   return(
		 <button type="button" className="btn btn-danger btn-block btn-round" onClick={this.formValidate}>Sign Up</button>
	   )
	}
   }

   //handles text change
   handleTextChange = e =>{
	this.setState({
	   [e.target.name] : e.target.value
	})
   }

   //validate the form
   formValidate = () =>{
	if(this.state.email && this.state.password && this.state.username){
	   if(this.state.password.length < 8 ){
		this.setState({message:'Password too short,must be atleast 8 character'})
	   }else{
	      this.setState({loading:true})
		return true
	   }
	}else if(!this.state.email && this.state.password && this.state.username){
	   this.setState({message:'Email required'})
	}else if(this.state.email && !this.state.password && this.state.username){
	   this.setState({message:'Password required'})
	}else if(this.state.email && this.state.password && !this.state.username){
	   this.setState({message:'Username required'})
	}else{
	   this.setState({message:'All Fields required'})
	}

   }
   render(){
	return(
	    <div className="page-header" style={{"backgroundImage" : `url(${require('../../images/login_image.jpg')})`}}>
		 <div className="container">
		    <div className="row">
			 <div className="col-lg-4 ml-auto mr-auto">
			    <div className="card card-register bg-dark">
				 {/*notification*/}
				 {
				    this.state.message ? <div className="alert alert-danger alert-with-icon" data-notify="container">
					 <div className="container">
					    <div className="alert-wrapper">
						 <button type="button" className="close" data-dismiss="alert" aria-label="Close">
						    <i className="nc-icon nc-simple-remove"/>
						 </button>
						 <div className="message">{this.state.message}</div>
					    </div>
					 </div>
				    </div> : ''
				 }
				 <div className="mb-3 mt-1 align-self-center">
				    <img src={require('../../images/favicon.ico')} alt="logo"/>
				 </div>
				 <form className='register-form' onSubmit={this.handleSubmit}>
				    <input type="text" className="form-control" placeholder="Username"  name="username"  value={this.state.username} onChange={this.handleTextChange}/>
				    <br/>
				    <input type="email" className="form-control" placeholder="Email"  name="email"  value={this.state.email} onChange={this.handleTextChange}/>
				    <br/>
				    <input type="password" className="form-control" placeholder="Password" name="password" value={this.state.password} onChange={this.handleTextChange}/>
				    <div>{this.currentState()}</div>
				 </form>

				 <div className="forgot">
				    <Link to='/sign-in' className='btn btn-link btn-sm btn-danger mt-0'>Already have an account? Sign In</Link>
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

export default SignUp;