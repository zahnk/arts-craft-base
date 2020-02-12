import React, { Component } from "react";
import axios from "axios";
import ComponentList from "./ComponentList";
import { Button } from "react-bootstrap";

export default class Components extends Component {
  constructor(){
    super()
    this.state = {
      components: [],
    }
  };

  getData = () => {
    axios
      .get("/api/components")
      .then(response => {
        this.setState({
          components: response.data
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
    console.log("Components.render"+this.props.location.pathname);
    return (
      <div style={{textAlign: "left"}}>
        <h2 style={{textAlign: "left", marginBottom: "10px"}}><i className="fas fa-list fa-a"></i>Component Overview</h2>
        <ComponentList components={this.state.components} user={this.props.user} {...this.props}/>   
        <Button className="mr-2" size="lg" variant="primary" href={'/components/create'}><i className="far fa-plus-square fa-lg fa-a"></i>Create new Component</Button>
        <Button className="mr-2" size="lg" variant="primary" href={'/components/createwt'}><i className="far fa-plus-square fa-lg fa-a"></i>Create new Component with Template</Button>
      </div>
    );
  }
}
