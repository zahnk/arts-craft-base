import React, { Component } from "react";
import { Form, Card, Button, Col, ButtonToolbar } from "react-bootstrap";
import ConfirmDelete from "./ConfirmDelete";
import axios from "axios";
import '@fortawesome/fontawesome-free/css/all.css';

class ComponentDetail extends Component {
  state = {
    component: {
      name: '',
      description: '',
      imageUrl: '',
      template: ''
    }
  };

  showConfirmDelete = () => {
    this.setState({ showConfirm: true });
  }

  deleteComponentConfirmed = (confirmState) => {
    //console.log("Delete Component Confirmed:", confirmState);
    if (confirmState === true) {
      this.handleDelete();
    }
    this.setState({ showConfirm: false });
  }

  handleDelete = () => {
    const componentId = this.state.component._id;
    //console.log("delete component", componentId);
    this.deleteComponent(componentId);

  }

  deleteComponent = (componentId) => {
    //console.log("im delete.js gelandet", componentId);
    const deletePath = `/api/components/${componentId}`;
    axios.delete(deletePath)
      .then(() => {
        this.props.history.push("/components")
      })
      .catch(err => {
        console.log(err);
      })
  };

  getData = () => {
    const componentId = this.props.match.params.id;

    axios
      .get(`/api/components/${componentId}`)
      .then(response => {
        this.setState({
          component: response.data,
        });
      })
      .catch(err => {
        if (err.response.status === 404) {
          this.setState({
            error: err.response.data.message
          });
        }
      });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    //console.log(this.state, this.props);
    if (this.state.error) {
      return <p>{this.state.error}</p>;
    } else if (this.state.component === null) {
      return <div></div>;
    }

    return (
<<<<<<< HEAD
      <div>
        <Card bg="secondary" text="white" style={{ marginBottom: "10px" }}>
          <Card.Header as="h2"><i className="fas fa-sitemap fa-a"></i>Project Detail</Card.Header>
        </Card>
=======
      <div style={{textAlign: "left"}}>
        <h2 style={{textAlign: "left", marginBottom: "10px"}}><i className="fas fa-square fa-a"></i>Component Detail</h2>
>>>>>>> master

        <Card style={{ marginBottom: "10px", textAlign: "left" }}>
          <Card.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col} md="4">
                  <Form.Label>Project Name: </Form.Label>
                  <Form.Control
                    readOnly
                    as="input"
                    type="text"
                    value={this.state.component.name}
                  />
                </Form.Group>
                <Form.Group as={Col} md="8">
                  <Form.Label>Description: </Form.Label>
                  <Form.Control style={{ minHeight: "50px" }}
                    readOnly
                    rows="5"
                    as="textarea"
                    value={this.state.component.description}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="4">
                  <Form.Label>Image:</Form.Label>
                  <Form.Control
                    readOnly={true}
                    type="text"
                    value={this.state.component.imageUrl}
                  />
                </Form.Group>
                <Form.Group as={Col} md="8">
                  <Form.Label>Notes: </Form.Label>
                  <Form.Control
                    readOnly
                    rows="5"
                    as="textarea"
                    value={this.state.component.template}
                  />
                </Form.Group>
              </Form.Row>
              <Button className="mr-5" size="lg" variant="primary" onClick={() => { this.props.history.push("/components") }}><i className="far fa-window-close fa-lg fa-a"></i>Cancel</Button>
              <Button className="mr-5 ml-5" size="lg"><i className="far fa-edit fa-lg fa-a"></i>Edit</Button>
              <Button onClick={this.showConfirmDelete} className="ml-5" size="lg"><i className="far fa-trash-alt fa-lg fa-a"></i>Delete</Button>
            </Form>
          </Card.Body>
        </Card>
        <Card style={{ marginBottom: "10px", textAlign: "left" }}>
          <Card.Body>
          </Card.Body>
        </Card>

        <ConfirmDelete show={this.state.showConfirm} close={this.deleteComponentConfirmed} title="Component" />
      </div>
    );
  }
}

export default ComponentDetail;
