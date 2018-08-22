import React from "react";
import {Route} from 'react-router-dom'
import Navbar from "../navbar";
import Home from "../../pages/home"
import Footer from "../footer"
import About from "../../pages/about";
import Service from "../../pages/service";
import Contact from "../../pages/contact";
function MainLayout () {

   return (
	 <div>
	    <div>
		 <Navbar/>
	    </div>
	    <div>
		 <Route   path="/"  component={Home} />
		 <Route  path="/about"  component={About} />
		 <Route  path="/service"  component={Service} />
		 <Route  path="/contact"  component={Contact} />
	    </div>
	    <div>
		 <Footer/>
	    </div>
	 </div>

   );

}

export default MainLayout;