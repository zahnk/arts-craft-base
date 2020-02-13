import React, { Component } from 'react'
import { CardColumns } from "react-bootstrap";
import ComponentCardAssign from "./ComponentCardAssign";

export default class ComponentListAssign extends Component {
  constructor(){
    super()
    this.state = {
    }
  };

  render() {
    return (
      <CardColumns>
        {this.props.components.map( (component,i) => {
          console.log( "COL", component.imageUrl ) ;
          component.imageUrl = component.imageUrl || `def-c-${Math.floor(Math.random()*4)}.png`;
          if (component.owner === this.props.user._id) {
            return (
              <ComponentCardAssign key={component._id} component={component} cardId={i} cardassigned={this.props.cardstatus[i]} {...this.props}/>
            );
          }
         return ( <div></div> );
        })}
      </CardColumns>
    )
  }
}
