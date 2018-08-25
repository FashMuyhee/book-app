import React,{Component} from 'react';
import User from '../components/user'

class UserSettings extends Component {

   render() {
	return(

	    <User>
		 <div>
		    Settings
		 </div>
	    </User>
	   <User>
		<div>
		   <form>
			<div className="row">

			   <div className="col-md-6">
				<div className="form-group">
				   <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1" name="username"/>
				</div>
			   </div>

			   <div className="col-md-6">
				<div className="form-group">
				   <input type="email" className="form-control" placeholder="Email" aria-describedby="basic-addon1" name="email"/>
				</div>
			   </div>
		   	</div>

			<div className="row">
			   <div className="col-md-6">
				<div className="form-group">
				   <input type="text" className="form-control" placeholder="Description" aria-describedby="basic-addon1" name="description"/>
				</div>
			   </div>

			   <div className="col-md-6">
				<div className="form-group">
				   <input type="number" className="form-control" placeholder="Phone number" aria-describedby="basic-addon1" name="phone"/>
				</div>
			   </div>
			</div>
			<div className="row">
			   <div className="col-md-12">
				<div className="form-group">
				   <textarea className="form-control" rows="4" placeholder="Biography"/>
				</div>
			   </div>
			</div>
			<div className="row">
			   <div className="col-md-12">
				<div className="form-group">
				   <textarea className="form-control" rows="4" placeholder="Address"/>
				</div>
			   </div>
			</div>
			<div className="center">
			   <button className="btn btn-success btn-icon btn-round">Save <i className="nc-icon nc-check-2"/> </button>
			</div>
		   </form>
		</div>
	   </User>

	)
   }

}

export default UserSettings;