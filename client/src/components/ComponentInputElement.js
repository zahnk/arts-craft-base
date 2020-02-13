import React, { Component } from 'react'
import { Form, Row, Col } from 'react-bootstrap';
import InputElement from "./elements/InputElement";
import InputCheck from "./elements/InputCheck";

export default class ComponentInputElement extends Component {
  constructor(){
    super()
    this.state = {
    }
  }

  handleChange = () => {}

  render() {
    let inpOutput;

    switch( this.props.inpElement.eltype ){
      case "text":
      case "textarea":
      case "number":
      case "color":
        inpOutput = 
          <InputElement idx={0} uniqueKey={`CI${this.props.idx}`}
            eltype={this.props.inpElement.eltype} 
            name={this.props.inpElement.fixedProps[0].val} 
            label={this.props.inpElement.fixedProps[1].val} 
            placeholder={this.props.inpElement.fixedProps[2].val} 
            value={this.props.inpElement.fixedProps[3].val || ''}
            readonly={this.props.readOnly}
            handleChange={this.handleChange}
        />
        break;

      case "checkbox":
        inpOutput = 
          <InputCheck idx={0} uniqueKey={`CI${this.props.idx}`}
            eltype={this.props.inpElement.eltype} 
            name={this.props.inpElement.fixedProps[0].val} 
            label={this.props.inpElement.fixedProps[1].val} 
            placeholder={this.props.inpElement.fixedProps[2].val} 
            value={this.props.inpElement.fixedProps[3].val || false}
            readonly={this.props.readOnly}
            handleChange={this.handleChange}
          />
        break;      
    }
    return ( 
      <Form>
        <Row>   
          <Col sm="3">
            {inpOutput}
          </Col>
        </Row>
      </Form>
    )
  }
}