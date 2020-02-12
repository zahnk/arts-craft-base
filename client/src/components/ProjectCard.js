import React, { Component } from 'react'
import { Card } from "react-bootstrap";
import '@fortawesome/fontawesome-free/css/all.css';

export default class ProjectCard extends Component {
  constructor(){
    super()
    this.state = {
    }
  };
 
  backRoute = () => {
    if ( typeof( this.props.hideFooter ) === 'undefined' ) {
      this.props.history.push(`/projects/${this.props.project._id}`);
    }
  }

  render() {
    let isLink = typeof( this.props.hideFooter ) === 'undefined' ? true : false;
    return (
      <Card className={ isLink === true ? 'cardForDetail' : 'cardForDetailView' } border="dark" onClick={this.backRoute}>
        <Card.Img className="projectImage" src={this.props.project.imageUrl} alt="Project Image" />
        <Card.ImgOverlay>
          <Card.Header className="transparentCardHeader" as="h4">{this.props.project.name}</Card.Header>
        </Card.ImgOverlay>
        { isLink === true && (
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
            <Card.Link href={`/projects/${this.props.project._id}`}><i className="fas fa-book fa-m-a"></i>Detail</Card.Link>
          </Card.Footer>
*/