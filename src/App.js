import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Service from "./pages/service";
import Contact from "./pages/contact";
import Error from "./pages/404";
import SignIn from "./pages/auth/sign-in";
import SignUp from "./pages/auth/sign-up";
import UserDetail from "./pages/user_detail"
import UserSettings from "./pages/user_settings"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <MainLayout/> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/service" component={Service} />
          <Route path="/contact" component={Contact} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/user" component={UserDetail} />
          <Route path="/user_settings" component={UserSettings} />
          <Route component={Error} />
        </Switch>
      </Router>
    );
  }
}

export default App;
