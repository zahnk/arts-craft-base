import React, { Component } from "react";
import axios from "axios";
import ComponentList from "./ComponentList";


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
       <h1>Components</h1>
         <ComponentList components={this.state.components}/>
      </div>
    );
  }
}

export default Components;