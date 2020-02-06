import React, { Component } from "react";
import { Card, Button, ButtonToolbar } from "react-bootstrap";
import ConfirmDelete from "./ConfirmDelete";
import axios from "axios";
import '@fortawesome/fontawesome-free/css/all.css';

class ComponentDetail extends Component {
  state = {
    component: null,
    error: "",
    showConfirm: false
  };

  showConfirmDelete = () => {
    this.setState({ showConfirm: true }); 
  }

  deleteComponentConfirmed = (confirmState) => {
    console.log( "Delete Component Confirmed:", confirmState );
    if( confirmState === true ){
      this.handleDelete();
    }
    this.setState({ showConfirm: false }); 
  }

  handleDelete = () => {
    const componentId = this.state.component._id;
    console.log ("delete component", componentId);
    this.deleteComponent(componentId);
  }

  deleteComponent = (componentId) => {
    console.log("im delete.js gelandet", componentId);
    const deletePath=`/api/components/${componentId}`;
    axios.delete(deletePath)
            .then(()=> {
              this.props.history.push("/components")
            })
            .catch(err=>{
              console.log (err);
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

  deleteComponent = (confirmState) => {
    if( confirmState === true ) {
      this.handleDelete();
    } else {
      this.setState({ showConfirm: false }); 
    }
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    console.log(this.state, this.props);
    if (this.state.error) { 
      return <p>{this.state.error}</p>;
    } else if (this.state.component === null) {
      return <div></div>;
    }

    return (
      <div>
        <Card bg="secondary" text="white" style={{marginBottom: "10px"}}>
          <Card.Header as="h2"><i className="fas fa-sitemap fa-a"></i>Component Detail</Card.Header>
        </Card>

        <h1>{this.state.component.name}</h1>
        <p>{this.state.component.description}</p>

        <ButtonToolbar className="justify-content-center">
          <Button className="mr-5" size="lg"><i className="far fa-edit fa-lg fa-a"></i>Edit</Button>
          <Button className="ml-5" size="lg" onClick={this.showConfirmDelete}><i className="far fa-trash-alt fa-lg fa-a"></i>Delete </Button>
        </ButtonToolbar>
        
        <ConfirmDelete show={this.state.showConfirm} close={this.deleteComponentConfirmed} title="Component" />
      </div>
    );
  }
}

export default ComponentDetail;
