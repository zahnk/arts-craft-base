import React, { Component } from 'react'
import { CardColumns } from "react-bootstrap";
import TemplateCard from "./TemplateCard";

export default class TemplateList extends Component {
  constructor(){
    super()
    this.state = {
    }
  };

  render() {
    return (
      <CardColumns>
        {this.props.templates.map( (template,i) => {
          template.img = `def-t-0.png`;
          return (
            <TemplateCard key={template._id} template={template} />
          );
        })}
      </CardColumns>
    )
  }
}