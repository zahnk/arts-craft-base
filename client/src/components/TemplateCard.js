import React, { Component } from 'react'
import { Card } from "react-bootstrap";
import '@fortawesome/fontawesome-free/css/all.css';

export default class TemplateCard extends Component {
  constructor(){
    super()
    this.state = {
    }
  };

  render() {
    return (
      <Card border="secondary">
        <Card.Img className="templateImage" src={this.props.template.img} alt="Template Image" />
        <Card.ImgOverlay>
          <Card.Header className="transparentCardHeader" as="h4">{this.props.template.name}</Card.Header>
          <Card.Footer as="h5">
            <Card.Link href={`/templates/${this.props.template._id}`}><i className="fas fa-book fa-m-a"></i>Detail</Card.Link>
          </Card.Footer>
        </Card.ImgOverlay>
      </Card>
    )
  }
}
