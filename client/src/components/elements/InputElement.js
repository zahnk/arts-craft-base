import React, { Component } from 'react'
import { Form, Row, Col } from 'react-bootstrap';

export default class InputElement extends Component {
  constructor(){
    super()
    this.state = {
    }
  }

  handleChange = (event) => {
    this.props.handleChange( this.props.idx, event.target.value, this.props.uniqueKey );
  }
  
  render() {
    const labelText = `${this.props.label[0].toUpperCase()}${this.props.label.slice(1)}`;
    const colSize = [5,7];

    console.log( "TE", this.props );
    const maxLength = this.props.maxlength ? `maxLength: ${this.props.maxlength}` : '';
    const readOnly = this.props.readonly || false;

    return ( 
      <div>
        <Form.Group as={Row}>
          <Form.Label column sm={colSize[0]}>{labelText}:</Form.Label>
          <Col sm={colSize[1]}>
            <Form.Control 
              as="input" 
              type={this.props.eltype}
              name={labelText}
              readOnly={readOnly}
              id={`txb_${this.props.uniqueKey}`}
              placeholder={`Enter ${labelText}`} 
              value={this.props.value || '' }
              onChange={this.handleChange}
            />
          </Col>
        </Form.Group>

      </div>
    )
  }
}
/*
    const colSize = this.props.eltype !== 'checkbox' ? [5,7,0] : [5,4,3];
    
    let outputCol = null;
    if( colSize[2] > 0 ) { outputCol = ( <Col sm={colSize[2]}> </Col> ) };

*/