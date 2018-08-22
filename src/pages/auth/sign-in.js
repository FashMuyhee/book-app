import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


class SignIn extends Component {
   state = {
	email:'',
	password:'' ,
	message:null,
	loading:false
   }

   handleSubmit = (e) => {
	e.preventDefault()
	if(this.formValidate()){
	   axios({
		method:'POST',
		url:`http://127.0.0.1:8000/api/login`,
		data:{
		   email:this.state.email,
		   password:this.state.password
		},
		headers:{
		   'accepts': 'application/json',

		}
	   })
		 .then( res =>{

		    let token = res.data.success.access_token
		    this.props.history.push(`/user/${token}`)
		    this.setState({loading:true})

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
		 <button type="button" className="btn btn-danger btn-block btn-round" onClick={this.formValidate}>Sign In</button>
	   )
	}
   }
   handleTextChange = e =>{
	this.setState({
	   [e.target.name] : e.target.value
	})
   }

   formValidate = () =>{
	if(this.state.email && this.state.password){
	   if(this.state.password.length < 8 ){
		this.setState({message:'Password too short,must be atleast 8 character'})
	   }else{
	      this.setState({loading:true})
		return true
	   }
	}else if(!this.state.email && this.state.password){
	   this.setState({message:'Email required'})
	}else if(this.state.email && !this.state.password){
	   this.setState({message:'Password required'})
	}else{
	   this.setState({message:'Email and Password required'})
	}

   }

   render() {
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
				    <input type="email" className="form-control" placeholder="Email"  name="email"  value={this.state.email} onChange={this.handleTextChange}/>
				    <br/>
				    <input type="password" className="form-control" placeholder="Password" name="password" value={this.state.password} onChange={this.handleTextChange}/>
					<div>{this.currentState()}</div>
				 </form>
				 <div className="forgot">
				    <button className="btn btn-link btn-sm btn-danger">Forgot password?</button>
				 </div>
				 <div className="forgot">
					 <Link to='/sign-up' className='btn btn-link btn-sm btn-danger mt-0'>Yet to have an account? Sign Up</Link>
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

export default SignIn;