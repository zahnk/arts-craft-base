import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";


class ProjectDetail extends Component {
  state = {
    project: {},
    error: ""
  };

  getData = () => {
    const projectId = this.props.match.params.id;
    axios
      .get(`/api/projects/${projectId}`)
      .then(response => {
        console.log("ProjectDetails GET", response);
        this.setState({
          project: response.data
        });
      })
      .catch(err => {
        if (err.response.status === 404) {
          this.setState({
            error: err.response.data.message
          });
        }
      });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    console.log("projectDetails.render");
    return (
      <div>
        <h1>{this.state.project.name}</h1>
        <p>{this.state.project.description}</p>
        <p>{this.state.project.owner}</p>
        <p>{this.state.project.description}</p>
        <p>{this.state.project.notes}</p>
        <p>{this.state.project.status}</p>
      </div>
    );

  }
}

export default ProjectDetail;
