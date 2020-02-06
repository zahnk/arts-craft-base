import React, { Component } from 'react'
import { Form, Row, Col } from 'react-bootstrap';

export default class InputText extends Component {
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
    return (
      <div>
        <Form.Group as={Row}>
          <Form.Label column sm="4">{labelText}:</Form.Label>
          <Col sm="8">
            <Form.Control 
            type="text"
            name={labelText}
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
