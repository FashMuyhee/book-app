import React from "react";
import {Link} from 'react-router-dom';
function Error () {

	return (
			<div className="text-center " style={{'marginTop':'25%'}}>
				<h2> <b>Error 404</b></h2>
				<p> <b>The Page you're looking for does not exit</b></p>
				<Link to="/" className="link">Go Home</Link>
			</div>

	);

}

export default Error;