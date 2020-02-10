import React from "react";
import "./App.css";

import {Switch, Route, Redirect } from "react-router-dom";
import { initElements } from "./services/init";

import AppMenue from "./components/AppMenu";
import AppFooter from "./components/AppFooter";

import Startpage from "./components/Startpage";

import Projects from "./components/Projects";
import Components from "./components/Components";
import Templates from "./components/Templates";

import ProjectDetail from "./components/ProjectDetail";
import ComponentDetail from "./components/ComponentDetail";
// import TemplateDetail from "./components/TemplateDetail";

import ComponentCreate from "./components/ComponentCreate";
import TemplateCreate from "./components/TemplateCreate";
import ProjectCreate from "./components/ProjectCreate";

class App extends React.Component {
  state = {
    user: this.props.user,
  };

  setUser = user => {
    this.setState({
      user: user
    });
  };

  projectsRoute = props => {
    console.log( "projectsRoute", props );
    if (this.state.user) {
      return <Projects {...props} />;
    } else {
      return <Redirect to="/" />;
    }
  }

  projectsDetailRoute = props => {
    console.log( "projectsDetailRoute", props );
    if (this.state.user) {
      return <ProjectDetail user={this.state.user} {...props} />;
    } else {
      return <Redirect to="/" />;
    }
  }

  projectsCreateRoute = props => {
    console.log( "projectsCreateRoute", props );
    if (this.state.user) {
      return <ProjectCreate user={this.state.user} {...props} />;
    } else {
      return <Redirect to="/" />;
    }
  }

  componentsRoute = props => {
    console.log( "componentsRoute", props );
    if (this.state.user) {
      return <Components {...props} />;
    } else {
      return <Redirect to="/" />;
    }
  }

  componentsDetailRoute = props => {
    console.log( "componentsDetailRoute", props );
    if (this.state.user) {
      return <ComponentDetail user={this.state.user} {...props} />;
    } else {
      return <Redirect to="/" />;
    }
  }

  componentsCreateRoute = props => {
    console.log( "componentsCreateRoute", props );
    if (this.state.user) {
      return <ComponentCreate user={this.state.user} {...props} />;
    } else {
      return <Redirect to="/" />;
    }
  }

  templatesRoute = props => {
    console.log( "templatesRoute", props );
    if (this.state.user) {
      return <Templates {...props} />;
    } else {
      return <Redirect to="/" />;
    }
  }

  templatesCreateRoute = props => {
    console.log( "templatesCreateRoute", props );
    if (this.state.user) {
      return <TemplateCreate {...props} />;
    } else {
      return <Redirect to="/" />;
    }
  }

  templatesEditRoute = props => {
    console.log( "templatesEditRoute", props );
    if (this.state.user) {
      return <TemplateCreate {...props} />;
    } else {
      return <Redirect to="/" />;
    }
  }


  initElementSeeds = props => {
    console.log( "IES(C):", props.match.params, typeof( props.match.params ) );
    initElements( props.match.params.password );
    return <Redirect to="/" />;
  }

  render() {
    return (
      <div className="App">
        <AppMenue user={this.state.user} setUser={this.setUser}/>
        <div className="AppMenuSpace"></div>
        <div style={{margin: "0 10px"}}>
          <Switch>
            <Route exact path="/" render={
              props => <Startpage {...props} setUser={this.setUser}/>
            }/>
            <Route exact path="/signup" render={
              props => <Startpage {...props} setUser={this.setUser} showSignup={true}/>
            }/>
            <Route exact path="/login" render={
              props => <Startpage {...props} setUser={this.setUser} showLogin={true} />
            }/>
            <Route exact path="/projects" render={this.projectsRoute}/>
            <Route exact path="/projects/create" render={this.projectsCreateRoute}/>
            <Route exact path="/projects/:id" render={this.projectsDetailRoute}/>

            <Route exact path="/components" render={this.componentsRoute}/>
            <Route exact path="/components/create" render={this.componentsCreateRoute}/>
            <Route exact path="/components/:id" render={this.componentsDetailRoute}/>

            <Route exact path="/templates" render={this.templatesRoute}/>
            <Route exact path="/templates/create" render={this.templatesCreateRoute}/>
            <Route exact path="/templates/:id" render={this.templatesEditRoute}/>
            
            <Route exact path="/initelements/:password" render={this.initElementSeeds}/>

{/*
            <Route exact path="/templates/:id" render={props => { this.templatesRoute( "detail", props )}}/>
            <Route exact path="/templates/create" render={props => { this.templatesRoute( "create", props )}}/>
*/}

          </Switch>
        </div>
        <div className="AppFooterSpace"></div>
        <AppFooter user={this.state.user} />
      </div>
    );
  }
}

export default App;
