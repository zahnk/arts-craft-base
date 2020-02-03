import React from "react";
import "./App.css";
import {Switch, Route, Redirect } from "react-router-dom";

import AppMenue from "./components/AppMenu";
import AppFooter from "./components/AppFooter";

import Startpage from "./components/Startpage";
import Projects from "./components/Projects";
import Components from "./components/Components";

import Signup from "./components/Signup";
import Login from "./components/Login";

class App extends React.Component {
  state = {
    user: this.props.user
  };

  setUser = user => {
    this.setState({
      user: user
    });
  };

  projectsRoute = props => {
    if (this.state.user) {
      return <Projects {...props} />;
    } else {
      return <Redirect to="/" />;
    }
  }

  componentsRoute = props => {
    if (this.state.user) {
      return <Components {...props} />;
    } else {
      return <Redirect to="/" />;
    }
  }

  render() {
    return (
      <div className="App">
        <AppMenue user={this.state.user} setUser={this.setUser} />
        <div className="AppMenuSpace"></div>
        <Switch>
          <Route exact path="/" component={Startpage} />
          <Route exact path="/signup" render={
            props => <Signup {...props} setUser={this.setUser} />
          }/>
          <Route exact path="/login" render={
            props => <Login {...props} setUser={this.setUser} />
          }/>
          <Route exact path="/projects" render={this.projectsRoute}/>
          <Route exact path="/components" render={this.componentsRoute}/>
          }/>
         
        </Switch>
        <AppFooter user={this.state.user} />
      </div>
    );
  }
}

export default App;
