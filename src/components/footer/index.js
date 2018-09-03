import React,{Component} from "react";

class  Footer extends Component {
   state={
	year : new Date().getFullYear()
   }



   render(){
	return (
	    <div>
		 <footer className="footer section-dark">
		    <div className="container">
			 <div className="credits">
			   <span className="copyright align-content-center">
				   &copy;{this.state.year}, Created by  Fash Muyhee
			   </span>
			 </div>
		    </div>
		 </footer>
	    </div>

	);
   }


}

export default Footer;