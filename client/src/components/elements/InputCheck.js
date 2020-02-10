import React, { Component } from 'react'
import { Form, Row, Col } from 'react-bootstrap';

export default class InputCheck extends Component {
  constructor(){
    super()
    this.state = {
    }
  }

  handleChange = (event) => {
    this.props.handleChange( this.props.idx, !this.props.value, this.props.uniqueKey );
  }

  render() {
    const labelText = `${this.props.label[0].toUpperCase()}${this.props.label.slice(1)}`
    return (
      <div>
{/*}
        <Form.Group as={Row}>
          <Form.Label column sm="8">{labelText}:</Form.Label>
          <Col sm="4">
            <Form.Control 
              as="input" 
              type={this.props.eltype}
              name={labelText}
              id={`txb_${this.props.uniqueKey}`}
              placeholder={`Enter ${labelText}`} 
              value={this.props.value || '' }
              onChange={this.handleChange}
            />
          </Col>
        </Form.Group>
*/}
        <Form.Group as={Row}>
          <Form.Label column sm="8">{labelText}:</Form.Label>
          <Col sm="4">
            <Form.Check style={{marginTop: "10px"}}
              type="switch"
              id={`swt_${this.props.uniqueKey}`}
              label=""
              checked={this.props.value}
              onChange={this.handleChange}
            />
          </Col>
        </Form.Group>
      </div>
    )
  }
}
