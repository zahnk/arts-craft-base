import React, { Component } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";

class TemplateDetail extends Component {
  state = {
    template: null,
    error: "",
  };

  getData = () => {
    const templateId = this.props.match.params.id;
 
    axios
      .get(`/api/templates/${templateId}`)
      .then(response => {
        this.setState({
          template: response.data,
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
    if (this.state.error) { 
      return <p>{this.state.error}</p>;
    }

    return (
      <div style={{textAlign: "left"}}>
        <h2 style={{textAlign: "left", marginBottom: "10px"}}><i className="fas fa-square fa-a"></i>Template Detail</h2>
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

export default TemplateDetail;
