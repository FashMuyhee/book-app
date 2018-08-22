import React, { Component } from 'react';
import { Route ,BrowserRouter as Router,Switch} from 'react-router-dom';
import MainLayout from './components/mainlayout'
import User from './components/user'
import Error from './pages/404';
import SignIn from './pages/auth/sign-in';
import SignUp from './pages/auth/sign-up';

class App extends Component {
   render() {
	return  (
	    <Router>
		 <Switch>
		    <MainLayout/>
		    {/*<Route  path="/"  component={MainLayout} />*/}

		    <Route  path="/sign-in"  component={SignIn} />
		    <Route  path="/sign-up"  component={SignUp} />

		    {/*<Route path="/user/:token" component={UserDetail} />*/}
		    <User />
		    {/*<Route path="/user"  component={User} />*/}

		    <Route   component={Error} />
		 </Switch>
	    </Router>
	);
   }
}

export default App;
