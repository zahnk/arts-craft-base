import React, { Component } from "react";
import axios from "axios";
import TemplateList from "./TemplateList";
import { Card, Button } from "react-bootstrap";

export default class Templates extends Component {
  constructor(){
    super()
    this.state = {
      templates: [],
    }
  };

  getData = () => {
    axios
      .get("/api/templates")
      .then(response => {
        this.setState({
          templates: response.data
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
    console.log("Template.render", this.props.location.pathname);
    return (
      <div style={{textAlign: "left"}}>
        <h2 style={{textAlign: "left", marginBottom: "10px"}}><i className="fas fa-list fa-a"></i>Template Overview</h2>
        <TemplateList templates={this.state.templates} {...this.props}/>   
        <Button className="mr-2" size="lg" variant="primary" href={'/templates/create'}><i className="far fa-plus-square fa-lg fa-a"></i>Create new Template</Button>
      </div>
    );
  }
}
