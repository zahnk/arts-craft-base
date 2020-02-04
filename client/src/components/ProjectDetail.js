import React, { Component } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";

class ProjectDetail extends Component {
  state = {
    project: null,
    error: "",
  };

  getData = () => {
    const projectId = this.props.match.params.id;
 
    axios
      .get(`/api/projects/${projectId}`)
      .then(response => {
        this.setState({
          project: response.data,
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
    console.log(this.state, this.props);
    if (this.state.error) { 
      return <p>{this.state.error}</p>;
    } else if (this.state.project === null) {
      return <div></div>;
    }

    return (
      <div>
        <Card bg="primary" text="white" style={{marginBottom: "10px"}}>
          <Card.Header as="h2"><i className="fas fa-sitemap fa-a"></i>Project Detail</Card.Header>
        </Card>

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
