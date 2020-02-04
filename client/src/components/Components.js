import React, { Component } from "react";
import axios from "axios";
import ComponentList from "./ComponentList";
import { Card } from "react-bootstrap";


class Components extends Component {
  state = {
    components: []
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
      <div>
        <Card bg="secondary" text="white" style={{marginBottom: "10px"}}>
          <Card.Header as="h2"><i className="fas fa-sitemap fa-a"></i>Components</Card.Header>
        </Card>

        <ComponentList components={this.state.components}/>
      </div>
    );
  }
}

export default Components;