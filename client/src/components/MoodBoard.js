import React, { Component } from 'react'
import { CardColumns } from "react-bootstrap";

import ProjectCard from "./ProjectCard";
import ComponentCard from "./ComponentCard";

export default class MoodBoard extends Component {
  constructor(){
    super()
    this.state = {
    }
  };

  mapImageUrl = ( url, def ) => {
    if( url ){
      if( url.length > 0 ) return url;
    }
    return def;
  }

  render() {
    this.props.project.imageUrl = this.mapImageUrl( this.props.project.imageUrl, `/def-p-${Math.floor(Math.random()*6)}.png` );
    return (

      <CardColumns>
          <ProjectCard key={this.props.project._id} project={this.props.project} hideFooter={true} {...this.props}/>
          {
            this.props.components.map( (component,i) => {
              component.imageUrl = this.mapImageUrl( component.imageUrl, `/def-c-${Math.floor(Math.random()*4)}.png` );
              if (component.owner === this.props.user._id)  {
                return (
                  <ComponentCard key={component._id} component={component} hideFooter={true} {...this.props}/>
                );
              }
              return( <div></div> );
            })
          }
      </CardColumns>
    )
  }
}
