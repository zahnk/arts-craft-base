import React, { Component } from 'react'
import { Card } from "react-bootstrap";
import '@fortawesome/fontawesome-free/css/all.css';

export default class ComponentCardAssign extends Component {
  constructor(){
    super()
    this.state = {
    }
  };

  backRoute = () => {
    //this.props.history.push(`/components/${this.props.component._id}`);
  }

  render() {
    console.log( "CARD-A", this.props.cardassigned );
    return (
      <Card className="cardForDetail" border="dark" onClick={()=>{this.props.onStatusChange(this.props.cardId)}}>
        <Card.Img className="componentImage" src={this.props.component.imageUrl} alt="Component Image" />
        <Card.ImgOverlay>
          <Card.Header className="transparentCardHeader" as="h4">{this.props.component.name} - {this.props.cardassigned?'TRUE':'FALSE'} </Card.Header>
        </Card.ImgOverlay>
        <Card.Footer className="hoverFooter">
          <Card.Text>Click for Detail</Card.Text>
        </Card.Footer>
      </Card>
    )
  }
}
/*
          <Card.Footer as="h5">
            <Card.Text>Click for Detail</Card.Text>
          </Card.Footer>
*/