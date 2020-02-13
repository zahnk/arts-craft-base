import React, { Component } from "react";
import axios from "axios";
import ComponentListAssign from "./ComponentListAssign";
import { Button } from "react-bootstrap";

export default class ComponentAssign extends Component {
  constructor(){
    super()
    this.state = {
      components: [],
      cardstatus: [],
      project: {},
      isLoading : true
    }
  };


  getAllData = async () => {
    const projectId = this.props.match.params.id;

    let [projectData, componentsData] = await Promise.all([
        axios.get(`/api/projects/${projectId}`),
        axios.get("/api/components")
    ]);

    const curCardStatus = [];
    componentsData.data.forEach( (component, i) => {
        curCardStatus[i] = projectData.data.components.includes( (component._id).toString() );
    });

    console.log( "CAS: project.name", projectData.data );
    console.log( "CAS: component.name", componentsData.data );

    this.setState({
      components: componentsData.data,
      project: projectData.data,
      cardstatus: curCardStatus,
      isLoading: false
    });
  }

  handleStatusChange = (idx) => {
    let tempCardstatus = this.state.cardstatus.slice();
    tempCardstatus[idx] = (tempCardstatus[idx] === true) ? false : true;
    this.setState( { cardstatus: tempCardstatus } );
  }

  handleAssignSubmit = () => {
    let assignedComponents = [];
    this.state.cardstatus.forEach((status, index)=>{
      if (status) {
        assignedComponents.push(this.state.components[index]._id);
      }
    })
    const id = this.props.match.params.id;

    console.log( "CAS: project.name", this.state.project )
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
        this.props.history.push(`/projects/${id}`)
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
    this.getAllData();
  }

  render() {
    return (
      <div>
        { this.state.isLoading === true ? ( 
          <div> </div>
          ) : (
            <div style={{textAlign: "left"}}>
              <h2 style={{textAlign: "left", marginBottom: "10px"}}><i className="fas fa-list fa-a"></i>Component Assignment</h2>
              <ComponentListAssign onStatusChange={this.handleStatusChange} components={this.state.components} cardstatus={this.state.cardstatus} user={this.props.user} {...this.props}/>   
              <Button className="mr-2 mb-1" size="lg" variant="primary" type="submit" onClick={this.handleCancel}><i className="far fa-window-close fa-lg fa-a"></i>Cancel</Button>
              <Button className="mr-2 mb-1" size="lg" variant="success" onClick={this.handleAssignSubmit}><i className="far fa-plus-square fa-lg fa-a"></i>Assign selected Component(s)</Button>
            </div> )
        }
      </div>
    );
  }
}
