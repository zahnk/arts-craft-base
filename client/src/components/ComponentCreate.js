import React, { Component } from 'react'
import axios from "axios";
import { Form, Button, Col, Card } from "react-bootstrap";
import '@fortawesome/fontawesome-free/css/all.css';

export default class ComponentCreate extends Component {
  constructor(props){
    super(props)
    this.state = {
      component: []
    }
  }

  handleSubmit = () => {
    console.log ("submit/ create new component");
    //this.createComponent;
  }

  handleChange = () => {
    console.log ("entry new component");
    //this.createComponent;
  }

  render() {
    return (
      <div style={{textAlign: "left"}}>
        <h2 style={{textAlign: "left", marginBottom: "10px"}}><i className="fas fa-square fa-a"></i>Create Component</h2>
        <Card style={{marginBottom: "10px", textAlign: "left" }}>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} md="4">
                  <Form.Label htmlFor="componentName">Component Name: </Form.Label>
                  <Form.Control
                    as="input"
                    type="text"
                    name="componentName"
                    id="componentName"
                    value={this.state.componentName}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group as={Col} md="8">
                  <Form.Label htmlFor="description">Description: </Form.Label>
                  <Form.Control style={{minHeight: "50px"}}
                    rows="5"
                    as="textarea"
                    name="componentDescription"
                    id="componentDescription"
                    value={this.state.componentDescription}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="4">
                  <Form.Label htmlFor="componentType">Type:</Form.Label>
                  <Form.Control
                    as="select"
                    name="componentType"
                    id="componentType"
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group as={Col} md="8">
                  <Form.Label htmlFor="componentNotes">Notes: </Form.Label>
                  <Form.Control
                    as="input"
                    type="text"
                    name="componentNotes"
                    id="componentNotes"
                    value={this.state.componentNotes}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Form.Row>
            
              <Button className="mr-2" size="lg" variant="primary" type="submit" onClick={this.handleCreate}><i className="far fa-save fa-lg fa-a"></i>Submit new Component</Button>
            </Form>
          </Card.Body>
        </Card>

        <Card style={{marginBottom: "10px", textAlign: "left" }}>
          <Card.Body>
          </Card.Body>
        </Card>

        {this.state.error && (
          <Card body bg="danger" text="white">{this.state.error}</Card>                
        )}
      </div>
    )
  }
}