import React, { Component } from 'react'
import { CardColumns } from "react-bootstrap";
import ComponentCard from "./ComponentCard";

export default class ComponentList extends Component {
  constructor(){
    super()
    this.state = {
    }
  };

  render() {
    return (
      <CardColumns>
        {this.props.components.map( (component) => {
          return (
            <ComponentCard key={component._id} component={component} {...this.props}/>
          );
        })}
      </CardColumns>
    )
  }
}
