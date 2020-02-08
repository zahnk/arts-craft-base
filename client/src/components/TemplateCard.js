import React, { Component } from 'react'
import { Card } from "react-bootstrap";
import '@fortawesome/fontawesome-free/css/all.css';

export default class TemplateCard extends Component {
  constructor(){
    super()
    this.state = {
    }
  };

  backRoute = () => {
    this.props.history.push(`/template/${this.props.template._id}`);
  }

  render() {
    return (
      <Card className="cardForDetail" border="dark" onClick={this.backRoute}>
        <Card.Img className="templateImage" src={this.props.template.img} alt="Template Image" />
        <Card.ImgOverlay>
          <Card.Header className="transparentCardHeader" as="h4">{this.props.template.name}</Card.Header>
        </Card.ImgOverlay>
        <Card.Footer className="hoverFooter">
          <Card.Text>Click for Detail</Card.Text>
        </Card.Footer>
      </Card>
    )
  }
}
