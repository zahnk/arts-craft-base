import React, { Component } from "react";
import { Accordion, Form, Card, CardColumns, Button, Col, ButtonToolbar } from "react-bootstrap";
import ConfirmDelete from "./ConfirmDelete";
import ProjectCard from "./ProjectCard";
import ComponentCard from "./ComponentCard";
import axios from "axios";
import '@fortawesome/fontawesome-free/css/all.css';


class ProjectDetail extends Component {
  state = {
    project: null, 
    error: "",
    editForm: false,
    showConfirm: false,
    addComponentForm: false,
    showAccordion: true
  };

  showConfirmDelete = () => {
    this.setState({ showConfirm: true });
  }

  deleteProjectConfirmed = (confirmState) => {
    //console.log( "Delete Project Confirmed:", confirmState );
    if (confirmState === true) {
      this.handleDelete();
    }
    this.setState({ showConfirm: false });
  }

  handleDelete = () => {
    const projectId = this.state.project._id;
    //console.log ("delete project", projectId);
    this.deleteProject(projectId);
  }


  deleteProject = (projectId) => {
    //console.log("im delete.js gelandet", projectId);
    const deletePath = `/api/projects/${projectId}`;
    axios.delete(deletePath)
      .then(() => {
        this.props.history.push("/projects")
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
  const tempProject =  this.state.project;
  tempProject[event.target.name] = event.target.value;
    this.setState({
      project: tempProject
    });
  }

  getData = () => {
    const projectId = this.props.match.params.id;

    axios
      .get(`/api/projects/pop/${projectId}`)
      .then(response => {
        this.setState({
          project: response.data,
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
    console.log ("name", this.state.name);
    console.log ("description", this.state.description);
    console.log("notes",this.state.notes);
    axios
      .put(`/api/projects/${id}`, {
        name: this.state.project.name,
        description: this.state.project.description,
        notes: this.state.project.notes,
        imageUrl: this.state.project.imageUrl,
        owner: this.state.project.owner,
        status: this.state.project.status,
        components: this.state.project.components
      })
      .then(response => {
        this.setState({
          project: response.data,
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

  modifyComponents = () => {
    this.setState({
      addComponentForm: !this.state.addComponentForm
    });
    this.props.history.push(`/projects/assign/${this.state.project._id}`)
  };

  handleToggleAccordion = () => {
    console.log( "A-Toggle" );
    const newShowAccordion = !this.state.showAccordion;
    this.setState({ showAccordion: newShowAccordion });
  }

  redirectCallback = () => {
  }

  render() {
    if (this.state.error) {
      return <p>{this.state.error}</p>;
    } else if (this.state.project === null) {
      return <div></div>;
    }
    
    let canUpdate = false;
    if (this.state.project.owner === this.props.user._id) {
      canUpdate = true;
    }

    let form;
    if (this.state.editForm && canUpdate) {
      form = <Card text="dark" style={{ marginBottom: "10px", textAlign: "left" }}>
        <Card.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="4">
                <Form.Label>Project Name: </Form.Label>
                <Form.Control
                  as="input"
                  type="text"
                  name="name"
                  value={this.state.project.name || ''}
                  onChange={this.handleChange}
                />
                <Form.Label>Image Url:</Form.Label>
                <Form.Control 
                  as="input"
                  type="text"
                  name="imageUrl"
                  value={this.state.project.imageUrl || ''}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} md="8">
                <Form.Label>Description: </Form.Label>
                <Form.Control style={{ minHeight: "50px" }}
                  rows="5"
                  as="textarea"
                  name="description"
                  value={this.state.project.description|| ''}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="4">
                <Form.Label>Status:</Form.Label>
                <Form.Control
                    as="select"
                    name="status"
                    id="status"
                    value={this.state.project.status}
                    onChange={this.handleChange}
                  >
                    <option value="New" selected={this.state.project.status === "New"}>New</option>
                    <option value="Completed" selected={this.state.project.status === "Completed"}>Completed</option>
                    <option value="Planned" selected={this.state.project.status === "Planned"}>Planned</option>
                  </Form.Control>              
              </Form.Group>
              <Form.Group as={Col} md="8">
                <Form.Label>Notes: </Form.Label>
                <Form.Control
                  rows="5"
                  as="textarea"
                  name="notes"
                  value={this.state.project.notes}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form.Row>
            <Button className="mr-2" size="lg" variant="primary" onClick={() => { this.props.history.push("/projects") }}><i className="far fa-window-close fa-lg fa-a"></i>Cancel</Button>
            <Button onClick={this.handleSave} className="mr-2" size="lg"><i className="far fa-save fa-lg fa-a"></i>Save</Button>
            <Button onClick={this.showConfirmDelete} variant="danger" className="mr-2" size="lg"><i className="far fa-trash-alt fa-lg fa-a"></i>Delete</Button>
            <Button onClick={this.modifyComponents} variant="success" className="mr-2" size="lg"><i className="fas fa-retweet fa-lg fa-a"></i>Assign/Remove Component</Button>
          </Form>
        </Card.Body>
      </Card>;
    } else {
      form = 
      
      <Accordion defaultActiveKey="0">          
        <Card text="dark" style={{ marginBottom: "10px", textAlign: "left" }}>
          <Accordion.Toggle as={Card.Header} eventKey="0" onClick={this.handleToggleAccordion} className="opaqueCardHeader">
            { this.state.showAccordion === true ?
              ( <span><i className="far fa-caret-square-up fa-lg fa-a"></i>Hide project details</span> ) :
              ( <span><i className="far fa-caret-square-down fa-lg fa-a"></i>Show project details</span> ) }
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Form>
                <Form.Row>
                  <Form.Group as={Col} md="4">
                    <Form.Label>Project Name: </Form.Label>
                    <Form.Control
                      readOnly
                      as="input"
                      type="text"
                      value={this.state.project.name}
                    />
                    <Form.Label>Image Url:</Form.Label>
                    <Form.Control 
                      readOnly
                      as="input"
                      type="text"
                      value={this.state.project.imageUrl}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="8">
                    <Form.Label>Description: </Form.Label>
                    <Form.Control style={{ minHeight: "50px" }}
                      readOnly
                      rows="5"
                      as="textarea"
                      value={this.state.project.description}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md="4">
                    <Form.Label>Status</Form.Label>
                    <Form.Control
                      readOnly={true}
                      type="text"
                      value={this.state.project.status}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="8">
                    <Form.Label>Notes: </Form.Label>
                    <Form.Control
                      readOnly
                      rows="5"
                      as="textarea"
                      value={this.state.project.notes}
                    />
                  </Form.Group>
                </Form.Row>
                <Button className="mr-2" size="lg" variant="primary" onClick={() => { this.props.history.push("/projects") }}><i className="far fa-window-close fa-lg fa-a"></i>Cancel</Button>
                <Button onClick={this.toggleEdit} className="mr-2" size="lg"><i className="far fa-edit fa-lg fa-a"></i>Edit</Button>
                <Button onClick={this.showConfirmDelete} variant="danger"  className="mr-2" size="lg"><i className="far fa-trash-alt fa-lg fa-a"></i>Delete</Button>
              </Form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>      
    }

    const delProject = `Project: ${this.state.project.name ? this.state.project.name : ''}`;
    return (
      <div style={{textAlign: "left"}}>
        <h2 style={{textAlign: "left", marginBottom: "10px"}}>
          <i className="fas fa-sitemap fa-a"></i>Project Detail
        </h2>

        {form}
        {!this.state.showAccordion && (
          <CardColumns>
              <ProjectCard key={this.state.project._id} project={this.state.project} hideFooter={true} {...this.props}/>
              {
                this.state.project.components.map( (component,i) => {
                  component.imageUrl = component.imageUrl || `def-c-${Math.floor(Math.random()*4)}.png`;
                  if (component.owner === this.props.user._id)  {
                    return (
                      <ComponentCard key={component._id} component={component} hideFooter={true} {...this.props}/>
                    );
                  }
                })
              }

          </CardColumns>
        )
        }

        <ConfirmDelete show={this.state.showConfirm} close={this.deleteProjectConfirmed} title={delProject} />

      </div>

    );
  }
}

export default ProjectDetail;
