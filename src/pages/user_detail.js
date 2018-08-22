import React,{Component} from 'react';


class UserDetail extends Component {
 render(){
	 return(
	    <div className='container'>
				<div className="nav-tabs-navigation">
				 <div className="nav-tabs-wrapper">
				    <ul className="nav nav-tabs" role="tablist">
					 <li className="nav-item">
					    <button className="nav-link active" data-toggle="tab" role="tab">Follows</button>
					 </li>
					 <li className="nav-item">
					    <button className="nav-link" data-toggle="tab"  role="tab">Following</button>
					 </li>
				    </ul>
				 </div>
			    </div>

			    <div className="tab-content following">
				 <div className="tab-pane active" id="follows" role="tabpanel">
				    <div className="row">
					 <div className="col-md-6 ml-auto mr-auto">
					    <ul className="list-unstyled follows">
						 <li>
						    <div className="row">
							 <div className="col-md-2 col-sm-2 ml-auto mr-auto">
							    <img src={require('../images/avatar_3.jpg')} alt="avatar"
								   className="img-circle img-no-padding img-responsive"/>
							 </div>
							 <div className="col-md-7 col-sm-4  ml-auto mr-auto">
							    <h6>Flume<br/>
								 <small>Musical Producer</small>
							    </h6>
							 </div>
							 <div className="col-md-3 col-sm-2  ml-auto mr-auto">
							    <div className="form-check">
								 <label className="form-check-label">
								    <input className="form-check-input" type="checkbox" value="" defaultChecked/>
								    <span className="form-check-sign"/>
								 </label>
							    </div>
							 </div>
						    </div>
						 </li>
						 <hr/>
						 <li>
						    <div className="row">
							 <div className="col-md-2 ml-auto mr-auto ">
							    <img src={require('../images/avatar_2.jpg')} alt="avatar"
								   className="img-circle img-no-padding img-responsive"/>
							 </div>
							 <div className="col-md-7 col-sm-4">
							    <h6>Banks<br/>
								 <small>Singer</small>
							    </h6>
							 </div>
							 <div className="col-md-3 col-sm-2">
							    <div className="form-check">
								 <label className="form-check-label">
								    <input className="form-check-input" type="checkbox" value=""/>
								    <span className="form-check-sign"/>
								 </label>
							    </div>
							 </div>
						    </div>
						 </li>
					    </ul>
					 </div>
				    </div>
				 </div>
				 <div className="tab-pane text-center" id="following" role="tabpanel">
				    <h3 className="text-muted">Not following anyone yet :(</h3>
				    <button className="btn btn-warning btn-round">Find artists</button>
				 </div>
			    </div>
	    </div>

	)
 }

	
   

}

export default UserDetail;