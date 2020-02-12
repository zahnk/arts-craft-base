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
    console.log( "TCard", this.props.template._id );
    this.props.history.push(`/templates/${this.props.template._id}`);
  }

  render() {
    const tcName = this.props.template.name === '' ? '<Template>' : this.props.template.name;
    return (
      <Card className="cardForDetail" border="dark" onClick={this.backRoute}>
        <Card.Img className="templateImage" src={this.props.template.imageUrl} alt="Template Image" />
        <Card.ImgOverlay>
          <Card.Header className="transparentCardHeader" as="h4">{tcName}</Card.Header>
        </Card.ImgOverlay>
        <Card.Footer className="hoverFooter">
          <Card.Text>Click for Edit</Card.Text>
        </Card.Footer>
      </Card>
    )
  }
}
