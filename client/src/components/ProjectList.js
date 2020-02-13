import React, { Component } from 'react'
import { CardColumns } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

export default class ProjectList extends Component {
  constructor(){
    super()
    this.state = {
    }
  };

  mapImageUrl = ( url ) => {
    if( url ){
      if( url.length > 0 ) return url;
    }
    return `/def-p-${Math.floor(Math.random()*6)}.png`;
  }

  render() {
    return (
      <CardColumns>
        {this.props.projects.map( (project,i) => {
          project.imageUrl = this.mapImageUrl( project.imageUrl );
          console.log( project.imageUrl );
          if (project.owner === this.props.user._id) {
            return (
              <ProjectCard key={project._id} project={project} {...this.props}/>
            );
          }
          return ( <div></div> );
        })}
      </CardColumns>
    )
  }
}
