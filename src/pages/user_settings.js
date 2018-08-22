import React,{Component} from 'react';
import Footer from '../components/footer'
import Navbar from '../components/navbar'


class UserSettings extends Component {

   render() {
	return(
	    <div>
		 <div>
		    <Navbar/>
		 </div>
		 <div className="wrapper">
		    <div className="page-header page-header-xs" data-parallax="true" style={{"backgroundImage": `url(${require('../images/profileBg.jpg')})`}} >
			 <div className="filter"/>
		    </div>
		    Settings
		    <div>
			 <Footer/>
		    </div>
		 </div>
	    </div>

	)
   }

}

export default UserSettings;