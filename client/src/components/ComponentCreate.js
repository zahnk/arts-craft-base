import React, { Component } from 'react'
import axios from "axios";
import { Form, Button, Col, Card } from "react-bootstrap";
import '@fortawesome/fontawesome-free/css/all.css';

export default class ComponentCreate extends Component {
  constructor(props){
    super(props)
    this.state = {
      name:         "",
      description:  "",
      imageUrl:     "",
      owner:        this.props.user,
      template:     ""
      //projects:     []
    }
  }

  handleChange = event => {
    console.log ("entry new component");
    this.setState({ 
      [event.target.name]: event.target.value 
    });
  }

  handleCancel = event => {
    this.props.history.push("/components"); 
  }
  


  handleSubmit = event => {
     if (event) {
      event.preventDefault();
    }
    console.log("SUBMIT", this.state);
    // check if the image is already uploaded to the cloud or no image was selected
    
      // axios.post('http://localhost:5555/api/projects')
      axios
        .post("/api/components/create", {
          name: this.state.name,
          owner: this.state.owner,
          description: this.state.description,
          imageUrl: this.state.imageUrl,
          template: this.state.template
          //projects: this.state.projects 
        })
        .then(response => {
          console.log("then after post");
          //this.props.refreshData();
          this.setState({
            name:         "",
            description:  "",
            template:     "",
            imageUrl: ""
            //projects: []
          });
        })
        .catch(err => {
          console.log(err);
        });
       // set a flag that the project got submitted
      this.setState({
        submitted: true
      })
  }

 

  render() {
    console.log(this.state);
    
    return (
<<<<<<< HEAD
      <div style={{textAlign: "left"}}>
        <h2 style={{textAlign: "left", marginBottom: "10px"}}><i className="fas fa-square fa-a"></i>Create Component</h2>
=======
      <div>
        <Card bg="secondary" text="white" style={{marginBottom: "10px"}}>
          <Card.Header as="h2"><i className="fas fa-sitemap fa-a"></i>Components Create</Card.Header>
        </Card>

>>>>>>> master
        <Card style={{marginBottom: "10px", textAlign: "left" }}>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} md="4">
                  <Form.Label htmlFor="componentName">Component Name: </Form.Label>
                  <Form.Control
                    as="input"
                    type="text"
                    name="name"
                    id="name"
                    value={this.state.name}
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
                    value={this.state.description}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="4">
                  <Form.Label htmlFor="imageUrl">Image Url:</Form.Label>
                  <Form.Control
                    as="input"
                    name="imageUrl"
                    id="imageUrl"
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group as={Col} md="8">
                  <Form.Label htmlFor="template">Template: </Form.Label>
                  <Form.Control
                    as="input"
                    type="text"
                    name="template"
                    id="template"
                    value={this.state.template}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Form.Row>
              <Button className="mr-2" size="lg" variant="primary" type="submit" onClick={this.handleCancel}><i className="far fa-window-close fa-lg fa-a"></i>Cancel</Button>            
              <Button className="mr-2" size="lg" variant="primary" type="submit"><i className="far fa-save fa-lg fa-a"></i>Submit new Component</Button>
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