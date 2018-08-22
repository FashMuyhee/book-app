import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Service from "./pages/service";
import Contact from "./pages/contact";
import User from "./components/user";
import Error from "./pages/404";
import SignIn from "./pages/auth/sign-in";
import SignUp from "./pages/auth/sign-up";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <MainLayout/> */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/service" component={Service} />
          <Route path="/contact" component={Contact} />

          {/*<Route path="/user/:token" component={UserDetail} />*/}
          {/* <User /> */}

          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />

          <Route path="/user" component={User} />

          <Route component={Error} />
        </Switch>
      </Router>
    );
  }
}

export default App;
