import React, { Component } from "react";
import { signup } from "../services/auth";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

class Signup extends Component {
  state = {
    username: "",
    password: "",
    error: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      error: undefined 
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    signup(this.state.username, this.state.password).then(data => {
      if (data.message) {
        // handle errors
        this.setState({
          error: data.message
        });
      } else {
        // no error
        // lift the data up to the App state
        this.props.setUser(data);
        // redirect to "/projects"
        this.props.history.push("/projects");
      }
    });
  };

  render() {
    console.log(this.props);
    return (
      <Container>
        <Row>
          <Col xs={12} sm={{span:4, offset: 4}}>
            <Card bg="secondary" text="white" style={{marginBottom: "10px"}}>
              <Card.Header as="h2"><i className="fas fa-user-plus fa-a"></i>Signup</Card.Header>
            </Card>
            <Card style={{marginBottom: "10px"}}>
              <Card.Body>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group>
                    <Form.Label htmlFor="username">Username: </Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      id="username"
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label htmlFor="password">Password: </Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      id="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Button size="lg" variant="dark" type="submit">Sign up</Button>
                </Form>
              </Card.Body>
            </Card>
            {this.state.error && (
              <Card body bg="danger" text="white">{this.state.error}</Card>                
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Signup;
