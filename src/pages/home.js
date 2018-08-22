import React from "react";
import bgImg from '../images/bgImg.jpg'

function Home () {

   return (
	 <section>
	    <div className="page-header" data-parallax="true"
		   style={{"backgroundImage": `url(${bgImg})`}}>
		 <div className="filter"/>
		 <div className="container">
		    <div className="motto text-center">
			 <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h1>
			 <h3> Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam atque autem debitis </h3>
			 <br/>
			 <button type="button" className="btn btn-outline-neutral btn-round">Continue</button>
		    </div>
		 </div>
	    </div>
	    <div className="main">
		 <div className="section text-center">
		    <div className="container">
			 <div className="row">
			    <div className="col-md-8 ml-auto mr-auto">
				 <h2 className="title">Let's talk product</h2>
				 <h5 className="description">This is the paragraph where you can write more details about your
				    product. Keep you user engaged by providing meaningful information. Remember that by this
				    time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you
				    want the user to see more.</h5>
				 <br/>
				 <button className="btn btn-danger btn-round">See Details</button>
			    </div>
			 </div>
		    </div>
		 </div>
	    </div>
	 </section>






   );

}

export default Home;