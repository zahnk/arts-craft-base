import React, { Component } from 'react'
import { Card } from "react-bootstrap";
import '@fortawesome/fontawesome-free/css/all.css';

export default class ComponentCard extends Component {
  constructor(){
    super()
    this.state = {
    }
  };

  render() {
    return (
      <Card border="secondary">
        <Card.Img className="componentImage" src={this.props.component.img} alt="Component Image" />
        <Card.ImgOverlay>
          <Card.Header className="transparentCardHeader" as="h4">{this.props.component.name}</Card.Header>
          <Card.Footer as="h5">
            <Card.Link href={`/components/${this.props.component._id}`}><i className="fas fa-book fa-m-a"></i>Detail</Card.Link>
          </Card.Footer>
        </Card.ImgOverlay>
      </Card>
    )
  }
}
