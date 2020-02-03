import React, { Component } from "react";
import axios from "axios";
import ProjectList from "./ProjectList";


class Projects extends Component {
  state = {
    projects: []
  };

  getData = () => {
    axios
      .get("/api/projects")
      .then(response => {
        this.setState({
          projects: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    console.log("Projects.render"+this.props.location.pathname);
    return (
      <div>
       <h1>Projects</h1>
         <ProjectList projects={this.state.projects}/>
      </div>
    );
  }
}

export default Projects;
