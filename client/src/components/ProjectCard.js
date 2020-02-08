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
    this.props.history.push(`/projects/${this.props.project._id}`);
  }

  render() {
    return (
      <Card className="cardForDetail" border="dark" onClick={this.backRoute}>
        <Card.Img className="projectImage" src={this.props.project.img} alt="Project Image" />
        <Card.ImgOverlay>
          <Card.Header className="transparentCardHeader" as="h4">{this.props.project.name}</Card.Header>
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
            <Card.Link href={`/projects/${this.props.project._id}`}><i className="fas fa-book fa-m-a"></i>Detail</Card.Link>
          </Card.Footer>
*/