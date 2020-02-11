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

  handleStatusChange = (idx) => {
    let tempCardstatus = this.state.cardstatus.slice();
    tempCardstatus[idx] = (tempCardstatus[idx] === true) ? false : true;
    console.log( "IDX", idx );
    this.setState( { cardstatus: tempCardstatus } );
  }

  handleAssignSubmit = () => {
    console.log( "Assign Status", this.state.cardstatus );
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    console.log("Components.render"+this.props.location.pathname);
    return (
      <div style={{textAlign: "left"}}>
        <h2 style={{textAlign: "left", marginBottom: "10px"}}><i className="fas fa-list fa-a"></i>Component Assignment</h2>
        <ComponentListAssign onStatusChange={this.handleStatusChange} components={this.state.components} cardstatus={this.state.cardstatus} user={this.props.user} {...this.props}/>   
        <Button className="mr-2" size="lg" variant="primary" onClick={this.handleAssignSubmit}><i className="far fa-plus-square fa-lg fa-a"></i>Assign selected Component(s)</Button>
      </div>
    );
  }
}
