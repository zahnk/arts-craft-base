import React, { Component } from "react";
import axios from "axios";


class Projects extends Component {
  state = {
    
  };

  

  componentDidMount() {
    
  }

  render() {
    console.log("Projects.render"+this.props.location.pathname);
    return (
      <div>
       <h1>Projects</h1>
      </div>
    );
  }
}

export default Projects;
