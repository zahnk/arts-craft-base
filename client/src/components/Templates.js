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
      <div>
        <Card bg="secondary" text="white" style={{marginBottom: "10px"}}>
          <Card.Header as="h2"><i className="fas fa-sitemap fa-a"></i>Templates</Card.Header>
        </Card>

        <TemplateList templates={this.state.templates}/>
              
        <Card className="text-left" style={{marginBottom: "10px", backgroundColor: "transparent"}}>
          <Card.Header>
            <Button className="mr-2" size="lg" variant="dark" href={'/templates/create'}><i className="fas fa-plus fa-a"></i>CREATE TEMPLATE</Button>
          </Card.Header>
        </Card>
      </div>
    );
  }
}
