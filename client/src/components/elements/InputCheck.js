import React, { Component } from 'react'
import { Form, Row, Col } from 'react-bootstrap';

export default class InputText extends Component {
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
        <Form.Group as={Row}>
          <Col sm="12">
            <Form.Check
              type="switch"
              id={`swt_${this.props.uniqueKey}`}
              label={labelText}
              checked={this.props.value}
              onChange={this.handleChange}
            />
          </Col>
        </Form.Group>
      </div>
    )
  }
}
