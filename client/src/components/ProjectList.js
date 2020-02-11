import React, { Component } from 'react'
import { CardColumns } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

export default class ProjectList extends Component {
  constructor(){
    super()
    this.state = {
    }
  };

  render() {
    return (
      <CardColumns>
        {this.props.projects.map( (project,i) => {
          project.img = project.img || `def-p-${Math.floor(Math.random()*6)}.png`;
          if (project.owner === this.props.user._id) {
          return (
            <ProjectCard key={project._id} project={project} {...this.props}/>
          );
         }
        })}
      </CardColumns>
    )
  }
}
