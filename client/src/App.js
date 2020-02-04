import React from "react";
import "./App.css";
import {Switch, Route, Redirect } from "react-router-dom";

import AppMenue from "./components/AppMenu";
import AppFooter from "./components/AppFooter";

import Startpage from "./components/Startpage";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
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

  render() {
    return (
      <div className="App">
        <AppMenue user={this.state.user} setUser={this.setUser} />
        <div className="AppMenuSpace"></div>
        <div style={{margin: "0 10px"}}>
          <Switch>
            <Route exact path="/" component={Startpage} />
            <Route exact path="/signup" render={
              props => <Signup {...props} setUser={this.setUser} />
            }/>
            <Route exact path="/login" render={
              props => <Login {...props} setUser={this.setUser} />
            }/>
            <Route exact path="/projects" render={this.projectsRoute}/>
            <Route exact path="/projects/:id" render={
              props => <ProjectDetail user={this.state.user} {...props} />
            }/>
            
            }/>
          
          </Switch>
        </div>
        <div className="AppFooterSpace"></div>
        <AppFooter user={this.state.user} />
      </div>
    );
  }
}

export default App;
