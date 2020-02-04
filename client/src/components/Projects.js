import React, { Component } from "react";
import axios from "axios";
import ProjectList from "./ProjectList";
import { Card } from "react-bootstrap";


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
        <Card bg="secondary" text="white" style={{marginBottom: "10px"}}>
          <Card.Header as="h2"><i className="fas fa-sitemap fa-a"></i>Projects</Card.Header>
        </Card>

        <ProjectList projects={this.state.projects}/>
      </div>
    );
  }
}

export default Projects;
