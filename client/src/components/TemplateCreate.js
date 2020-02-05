import React, { Component } from 'react'
import axios from "axios";
import { Form, Button, Col, Card } from "react-bootstrap";

export default class TemplateCreate extends Component {
  constructor(props){
    super(props)
    this.state = {
      elements: []
    }
  }

  handleChangeElement = (event) => {
    console.log( "OPT:", event.target.value );
  }

  handleChange = (event) => {
    console.log( "CHG:", event.target );
  }

  getData = () => {
    axios
      .get("/api/templates/elements")
      .then(response => {
        this.setState({
          elements: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        <Card bg="secondary" text="white" style={{marginBottom: "10px"}}>
          <Card.Header as="h2"><i className="fas fa-sitemap fa-a"></i>Templates Create</Card.Header>
        </Card>

        <Card style={{marginBottom: "10px", textAlign: "left" }}>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} md="4">
                  <Form.Label htmlFor="templateName">Template Name: </Form.Label>
                  <Form.Control
                    as="input"
                    type="text"
                    name="templateName"
                    id="templateName"
                    value={this.state.templateName}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group as={Col} md="8">
                  <Form.Label htmlFor="description">Description: </Form.Label>
                  <Form.Control style={{minHeight: "50px"}}
                    rows="5"
                    as="textarea"
                    name="description"
                    id="description"
                    value={this.state.templateDescription}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="4">
                  <Form.Label htmlFor="elementType">Element Type:</Form.Label>
                  <Form.Control
                    as="select"
                    name="elementType"
                    id="elementType"
                    onChange={this.handleChangeElement}
                  >
                  {
                    this.state.elements.map( element => {
                      return <option key={element._id} value={element._id}>{element.element}</option>
                    })
                  }
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} md="8">
                  <Form.Label htmlFor="elementDescription">Description: </Form.Label>
                  <Form.Control
                    as="input"
                    type="text"
                    name="elementDescription"
                    id="elementDescription"
                    value={this.state.elementDescription}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Form.Row>
              <Button className="mr-2" size="lg" variant="dark" type="">ADD ELEMENT</Button>
              <Button className="mr-2" size="lg" variant="dark" type="submit">SUBMITT TEMPLATE</Button>
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
