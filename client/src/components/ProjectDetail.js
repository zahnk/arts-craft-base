import React, { Component } from "react";
import { Card, Button, ButtonToolbar } from "react-bootstrap";
import ConfirmDelete from "./ConfirmDelete";
import axios from "axios";
import '@fortawesome/fontawesome-free/css/all.css';


class ProjectDetail extends Component {
  state = {
    project: null,
    error: "",
    showConfirm: false
  };

  showConfirmDelete = () => {
    this.setState({ showConfirm: true }); 
  }

  deleteProjectConfirmed = (confirmState) => {
    console.log( "Delete Project Confirmed:", confirmState );
    if( confirmState === true ){
      this.handleDelete();
    }
    this.setState({ showConfirm: false }); 
  }

  handleDelete = () => {
    const projectId = this.state.project._id;
    console.log ("delete project", projectId);
    this.deleteProject(projectId);
  }

  deleteProject = (projectId) => {
    console.log("im delete.js gelandet", projectId);
    const deletePath=`/api/projects/${projectId}`;
    axios.delete(deletePath)
            .then(()=> {
              this.props.history.push("/projects")
            })
            .catch(err=>{
              console.log (err);
            })
  };

  getData = () => {
    const projectId = this.props.match.params.id;
  
    axios
      .get(`/api/projects/${projectId}`)
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

  componentDidMount() {
    this.getData();
  }


  render() {
    console.log(this.state, this.props);
    if (this.state.error) {
      return <p>{this.state.error}</p>;
    } else if (this.state.project === null) {
      return <div></div>;
    }

    return (
      <div>
        <Card bg="secondary" text="white" style={{marginBottom: "10px"}}>
          <Card.Header as="h2"><i className="fas fa-sitemap fa-a"></i>Project Detail</Card.Header>
        </Card>

        <h1>{this.state.project.name}</h1>
        <p>{this.state.project.description}</p>
        <p>{this.state.project.owner}</p>
        <p>{this.state.project.description}</p>
        <p>{this.state.project.notes}</p>
        <p>{this.state.project.status}</p>
        <br />

        <ButtonToolbar className="justify-content-center">
          <Button className="mr-5" size="lg"><i className="far fa-edit fa-lg fa-a"></i>Edit</Button>
          <Button onClick={this.showConfirmDelete} className="ml-5" size="lg"><i className="far fa-trash-alt fa-lg fa-a"></i>Delete</Button>
        </ButtonToolbar>

        <ConfirmDelete show={this.state.showConfirm} close={this.deleteProjectConfirmed} title={this.state.project.name} />

      </div>
    );
  }
}

export default ProjectDetail;
