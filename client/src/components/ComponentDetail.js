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
      notes: ''
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
  console.log ("handleChange", event.target.name)  
    this.setState({
      [event.target.name]: event.target.value
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

  








let form;
if (this.state.editForm) {
  form = <Card style={{ marginBottom: "10px", textAlign: "left" }}>
    <Card.Body>
      <Form>
        <Form.Row>
          <Form.Group as={Col} md="4">
            <Form.Label>Component Name: </Form.Label>
            <Form.Control
              as="input"
              type="text"
              name="name"
              value={this.state.name || ''}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} md="8">
            <Form.Label>Description: </Form.Label>
            <Form.Control style={{ minHeight: "50px" }}
              rows="5"
              as="textarea"
              name="description"
              value={this.state.description}
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
                value={this.state.imageUrl}
                onChange={this.handleChange}
            />           
          </Form.Group>
          <Form.Group as={Col} md="8">
            <Form.Label>Notes: </Form.Label>
            <Form.Control
              rows="5"
              as="textarea"
              name="notes"
              value={this.state.notes}
              onChange={this.handleChange}
            />
          </Form.Group>
        </Form.Row>
        <Button className="mr-5" size="lg" variant="primary" onClick={() => { this.props.history.push("/components") }}><i className="far fa-window-close fa-lg fa-a"></i>Cancel</Button>
        <Button onClick={this.toggleEdit} className="mr-5 ml-5" size="lg"><i className="far fa-save fa-lg fa-a"></i>Save</Button>
        <Button onClick={this.showConfirmDelete} className="ml-5" size="lg"><i className="far fa-trash-alt fa-lg fa-a"></i>Delete</Button>
      </Form>
    </Card.Body>
  </Card>;
} else {
  form = <Card style={{ marginBottom: "10px", textAlign: "left" }}>
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
              value={this.state.component.description}
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
            <Form.Label>Notes: </Form.Label>
            <Form.Control
              readOnly
              rows="5"
              as="textarea"
              value={this.state.component.notes}
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

return (
      <div>
        <Card bg="secondary" text="white" style={{ marginBottom: "10px" }}>
          <Card.Header as="h2"><i className="fas fa-sitemap fa-a"></i>Component Detail</Card.Header>
        </Card>

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
