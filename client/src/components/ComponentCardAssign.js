import React, { Component } from 'react'
import { Card } from "react-bootstrap";
import '@fortawesome/fontawesome-free/css/all.css';

export default class ComponentCardAssign extends Component {
  constructor() {
    super()
    this.state = {
    }
  };

  backRoute = () => {
    //this.props.history.push(`/components/${this.props.component._id}`);
  }

  render() {
    let trueVar = <i class="far fa-check-square"></i>;
    let falseVar = <i class="far fa-square"></i>;
    return (
      <Card className="cardForDetailView" border="dark" onClick={() => { this.props.onStatusChange(this.props.cardId, this.props.component._id) }}>
        <Card.Img className="componentImage" src={this.props.component.imageUrl} alt="Component Image" />
        <Card.ImgOverlay>
          <Card.Header className="transparentCardHeader" as="h4">{this.props.cardassigned ? trueVar : falseVar} {this.props.component.name}</Card.Header>
        </Card.ImgOverlay>
      </Card>
    )
  }
}
