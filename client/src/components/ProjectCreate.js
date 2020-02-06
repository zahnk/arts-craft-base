import React, { Component } from 'react'
import axios from "axios";
import { Form, Button, Col, Card } from "react-bootstrap";

export default class ProjectCreate extends Component {
  constructor(props){
    super(props)
    this.state = {
      name:         "",
      owner:        this.props.user,
      description:  "",
      notes:     "",
      //components: false,
      status: 'New'
    }
  }

  handleChange = event => {
    this.setState({ 
      [event.target.name]: event.target.value 
    });
  }

  handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    console.log("SUBMIT", this.state);
    // check if the image is already uploaded to the cloud or no image was selected
    
      // axios.post('http://localhost:5555/api/projects')
      axios
        .post("/api/projects/create", {
          name: this.state.name,
          owner: this.state.owner,
          description: this.state.description,
          notes: this.state.notes,
          status: this.state.status
        })
        .then(response => {
          console.log("then after post");
          //this.props.refreshData();
          this.setState({
            name:         "",
            description:  "",
            notes:     "",
            //components: false,
            status: false
          });
        })
        .catch(err => {
          console.log(err);
        });
       // set a flag that the project got submitted
      this.setState({
        submitted: true
      })
    };


  componentDidMount() {
  //  this.getData();
  }

  render() {
    console.log(this.state);
    
    return (
      <div>
        <Card bg="secondary" text="white" style={{marginBottom: "10px"}}>
          <Card.Header as="h2"><i className="fas fa-sitemap fa-a"></i>Projects Create</Card.Header>
        </Card>

        <Card style={{marginBottom: "10px", textAlign: "left" }}>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} md="4">
                  <Form.Label htmlFor="name">Project Name: </Form.Label>
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
            
              <Button className="mr-2" size="lg" variant="primary" type=""><i className="far fa-plus-square fa-lg fa-a"></i>Cancel</Button>
              <Button className="mr-2" size="lg" variant="primary" type="submit"><i className="far fa-save fa-lg fa-a"></i>Submit new Project</Button>
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