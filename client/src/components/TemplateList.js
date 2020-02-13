import React, { Component } from 'react'
import { CardColumns } from "react-bootstrap";
import TemplateCard from "./TemplateCard";

export default class TemplateList extends Component {
  constructor(){
    super()
    this.state = {
    }
  };

  mapImageUrl = ( url ) => {
    if( url ){
      if( url.length > 0 ) return url;
    }
    return `/def-t-0.png`;
  }

  render() {
    return (
      <CardColumns>
        {this.props.templates.map( (template,i) => {
         template.imageUrl = this.mapImageUrl( template.imageUrl );
          return (
            <TemplateCard key={template._id} template={template} {...this.props}/>
          );
        })}
      </CardColumns>
    )
  }
}
