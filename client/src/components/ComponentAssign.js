import React, { Component } from "react";
import axios from "axios";
import ComponentListAssign from "./ComponentListAssign";
import { Button } from "react-bootstrap";
import {Link} from "react-router-dom";

export default class ComponentAssign extends Component {
  constructor(){
    super()
    this.state = {
      components: [],
      cardstatus: [],
      project:{}
    }
  };

  getData = () => {
    axios
      .get("/api/components")
      .then(response => {
        this.setState({
          components: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };


  getProject = () => {
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

  handleStatusChange = (idx) => {
    let tempCardstatus = this.state.cardstatus.slice();
    tempCardstatus[idx] = (tempCardstatus[idx] === true) ? false : true;
    console.log( "IDX", idx );
    console.log("CS", this.state.cardstatus);
    this.setState( { cardstatus: tempCardstatus } );
  }



  handleAssignSubmit = () => {
    //console.log( "Assign Status", this.state.cardstatus );
    //console.log("State Project: ", this.state.project);
    let assignedComponents = [];
    this.state.cardstatus.forEach((status, index)=>{
      if (status) {
        assignedComponents.push(this.state.components[index]._id);
      }
    })
    console.log("AssComponenents", assignedComponents);
    const id = this.props.match.params.id;
   axios
   .put(`/api/projects/${id}`, {
      name: this.state.project.name,
      description: this.state.project.description,
      notes: this.state.project.notes,
      owner: this.state.project.owner,
      status: this.state.project.status,
      components: assignedComponents
      })
      .then(response => {
        this.setState({
          project: response.data,
          // title: response.data.title,
          // description: response.data.description,
          editForm: false
        });
        //console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  
  }

  handleCancel = event => {
    let origProj = this.props.match.params.id;
    this.props.history.push(`/projects/${origProj}`);
  }

  componentDidMount() {
    this.getData();
    this.getProject();
  }

  render() {
    console.log("projid", this.props.proj);
    return (
      <div style={{textAlign: "left"}}>
        <h2 style={{textAlign: "left", marginBottom: "10px"}}><i className="fas fa-list fa-a"></i>Component Assignment</h2>
        <ComponentListAssign onStatusChange={this.handleStatusChange} components={this.state.components} cardstatus={this.state.cardstatus} user={this.props.user} {...this.props}/>   
        <Button className="mr-2" size="lg" variant="primary" type="submit" onClick={this.handleCancel}><i className="far fa-window-close fa-lg fa-a"></i>Cancel</Button>
        <Button className="mr-2" size="lg" variant="primary" onClick={this.handleAssignSubmit}><i className="far fa-plus-square fa-lg fa-a"></i>Assign selected Component(s)</Button>
      </div>
    );
  }
}
