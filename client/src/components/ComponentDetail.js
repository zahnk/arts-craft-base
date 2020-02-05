import React, { Component } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";

class ComponentDetail extends Component {
  state = {
    component: null,
    error: "",
  };

  getData = () => {
    const componentId = this.props.match.params.id;
 
    axios
      .get(`/api/components/${componentId}`)
      .then(response => {
        this.setState({
          component: response.data,
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
    } else if (this.state.component === null) {
      return <div></div>;
    }

    return (
      <div>
        <Card bg="secondary" text="white" style={{marginBottom: "10px"}}>
          <Card.Header as="h2"><i className="fas fa-sitemap fa-a"></i>Component Detail</Card.Header>
        </Card>

        <h1>{this.state.component.name}</h1>
        <p>{this.state.component.description}</p>
        
      </div>
    );
  }
}

export default ComponentDetail;
