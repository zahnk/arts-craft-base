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
         component.img = component.img || `def-c-${Math.floor(Math.random()*4)}.png`;

          return (
            <ComponentCard key={component._id} component={component} {...this.props}/>
          );
        })}
      </CardColumns>
    )
  }
}
