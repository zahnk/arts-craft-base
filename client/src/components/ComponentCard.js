import React, { Component } from 'react'
import { Card } from "react-bootstrap";
import '@fortawesome/fontawesome-free/css/all.css';

export default class ComponentCard extends Component {
  constructor(){
    super()
    this.state = {
    }
  };

  backRoute = () => {
    if ( typeof( this.props.showFooter ) === 'undefined' ) {
      this.props.history.push(`/components/${this.props.component._id}`);
    }
  }

  render() {
    let cls = ( this.props.showFooter === false ) ? 'cardForDetailView' : 'cardForDetail';
    return (
      <Card className={cls} border="dark" onClick={this.backRoute}>
        <Card.Img className="componentImage" src={this.props.component.imageUrl} alt="Component Image" />
        <Card.ImgOverlay>
          <Card.Header className="transparentCardHeader" as="h4">{this.props.component.name}</Card.Header>
        </Card.ImgOverlay>
        { this.props.showFooter && (
          <Card.Footer className="hoverFooter">
            <Card.Text>Click for Detail</Card.Text>
          </Card.Footer>
        )}
      </Card>
    )
  }
}
/*
          <Card.Footer as="h5">
            <Card.Text>Click for Detail</Card.Text>
          </Card.Footer>
*/