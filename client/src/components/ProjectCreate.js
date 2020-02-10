import React, { Component } from 'react'
import axios from "axios";
import { Form, Button, Col, Card } from "react-bootstrap";
import '@fortawesome/fontawesome-free/css/all.css';

export default class ProjectCreate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      owner: this.props.user,
      description: "",
      notes: "",
      components: [],
      status: 'New'
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleCancel = event => {
    this.props.history.push("/projects");
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
          name: "",
          description: "",
          notes: "",
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

    return (
      <div style={{textAlign: "left"}}>
        <h2 style={{textAlign: "left", marginBottom: "10px"}}>
          <i className="fas fa-sitemap fa-a"></i>Project Create
        </h2>
        <Card text="dark" style={{marginBottom: "10px", textAlign:"left"}}>
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
                  <Form.Control style={{ minHeight: "50px" }}
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
                  <Form.Label htmlFor="status">Status:</Form.Label>
                  <Form.Control
                    as="select"
                    name="status"
                    id="status"
                    onChange={this.handleChange}
                  >
                    <option>New</option>
                    <option>Planned</option>
                    <option>Completed</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} md="8">
                  <Form.Label htmlFor="componentNotes">Template: </Form.Label>
                  <Form.Control
                    rows="5"
                    as="textarea"
                    type="text"
                    name="notes"
                    id="template"
                    value={this.state.notes}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Form.Row>

              <Button className="mr-2" size="lg" variant="primary" type="submit" onClick={this.handleCancel}><i className="far fa-window-close fa-lg fa-a"></i>Cancel</Button>
              <Button className="mr-2" size="lg" variant="primary" type="submit"><i className="far fa-save fa-lg fa-a"></i>Submit new Project</Button>
            </Form>
          </Card.Body>
        </Card>
        <Card style={{ marginBottom: "10px", textAlign: "left" }}>
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