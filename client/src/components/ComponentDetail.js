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
    },
    error: "",
    editForm: false,
    showConfirm: false

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

  toggleEdit = () => {
    this.setState({
      editForm: !this.state.editForm
    });
  };

  handleChange = event => {
    //console.log ("handleChange name", event.target.name);
    const tempComponent = this.state.component;
    tempComponent[event.target.name] = event.target.value;
    this.setState({
      component: tempComponent
    });
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

  handleSave = event => {
    const id = this.props.match.params.id;
    console.log("PUT: ", this.state.component);
    axios
      .put(`/api/components/${id}`, 
        this.state.component
        )
      .then(response => {
        this.setState({
          component: response.data,
          // title: response.data.title,
          // description: response.data.description,
          editForm: false
        });
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    //console.log("RENDER: ", this.state, this.props);
    if (this.state.error) {
      return <p>{this.state.error}</p>;
    } else if (this.state.component === null) {
      return <div></div>;
    }


    let canUpdate = false;

    if (this.state.component.owner === this.props.user._id) {
      canUpdate = true;
    } 

    let form;
    if (this.state.editForm && canUpdate) {
      form = <Card text="dark" style={{ marginBottom: "10px", textAlign: "left" }}>
        <Card.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} md="4">
                <Form.Label>Component Name: </Form.Label>
                <Form.Control
                  as="input"
                  type="text"
                  name="name"
                  value={this.state.component.name || ''}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} md="8">
                <Form.Label>Description: </Form.Label>
                <Form.Control style={{ minHeight: "50px" }}
                  rows="5"
                  as="textarea"
                  name="description"
                  value={this.state.component.description || '' }
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="4">
                <Form.Label>Image:</Form.Label>
                <Form.Control
                  as="input"
                  type="text"
                  name="imageUrl"
                  value={this.state.component.imageUrl}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} md="8">
                <Form.Label>Template: </Form.Label>
                <Form.Control
                  rows="5"
                  as="textarea"
                  name="template"
                  value={this.state.component.template || '' }
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form.Row>
            <Button className="mr-5" size="lg" variant="primary" onClick={() => { this.props.history.push("/components") }}><i className="far fa-window-close fa-lg fa-a"></i>Cancel</Button>
            <Button onClick={this.handleSave} className="mr-5 ml-5" size="lg"><i className="far fa-save fa-lg fa-a"></i>Save</Button>
            <Button onClick={this.showConfirmDelete} className="ml-5" size="lg"><i className="far fa-trash-alt fa-lg fa-a"></i>Delete</Button>
          </Form>
        </Card.Body>
      </Card>;
    } else {
      form = <Card text="dark" style={{ marginBottom: "10px", textAlign: "left" }}>
        <Card.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} md="4">
                <Form.Label>Component Name: </Form.Label>
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
                  value={this.state.component.description || '' }
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="4">
                <Form.Label>Image: </Form.Label>
                <Form.Control
                  readOnly={true}
                  type="text"
                  value={this.state.component.imageUrl}
                />
              </Form.Group>
              <Form.Group as={Col} md="8">
                <Form.Label>Template: </Form.Label>
                <Form.Control
                  readOnly
                  rows="5"
                  as="textarea"
                  value={this.state.component.template || '' }
                />
              </Form.Group>
            </Form.Row>
            <Button className="mr-5" size="lg" variant="primary" onClick={() => { this.props.history.push("/components") }}><i className="far fa-window-close fa-lg fa-a"></i>Cancel</Button>
            <Button onClick={this.toggleEdit} className="mr-5 ml-5" size="lg"><i className="far fa-edit fa-lg fa-a"></i>Edit</Button>
            <Button onClick={this.showConfirmDelete} className="ml-5" size="lg"><i className="far fa-trash-alt fa-lg fa-a"></i>Delete</Button>
          </Form>
        </Card.Body>
      </Card>;
    }

/*
      <div>
        <Card bg="secondary" text="white" style={{ marginBottom: "10px" }}>
          <Card.Header as="h2"><i className="fas fa-sitemap fa-a"></i>Component Detail</Card.Header>
        </Card>
*/
    return (
      <div style={{textAlign: "left"}}>
        <h2 style={{textAlign: "left", marginBottom: "10px"}}><i className="fas fa-square fa-a"></i>Create Detail</h2>

        {form}

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
