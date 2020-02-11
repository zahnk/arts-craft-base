import React, { Component } from "react";
import axios from "axios";
import ProjectList from "./ProjectList";
import { Button } from "react-bootstrap";

export default class Projects extends Component {
  constructor(){
    super()
    this.state = {
      projects: [],
    }
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
    return (
      <div style={{textAlign: "left"}}>
        <h2 style={{textAlign: "left", marginBottom: "10px"}}><i className="fas fa-list fa-a"></i>Project Overview</h2>
        <ProjectList projects={this.state.projects} user={this.props.user} {...this.props}/>   
        <Button className="mr-2" size="lg" variant="primary" href={'/projects/create'}><i className="far fa-plus-square fa-lg fa-a"></i>Create new Project</Button>
      </div>
    );
  }
}
