import React, { Component } from 'react'
import { Button, Modal, Row, Col } from "react-bootstrap";

export default class AppAbout extends Component {
  constructor(){
    super()
    this.state = {
    }
  };

  closeConfirm = (confirmState) => {
    this.props.close( confirmState );
  }

  render() {
    if(!this.props.show){ return null; }
    return (
      <Modal
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={this.props.show}
        onHide={() => { this.closeConfirm( false ) }}
        style={{color:"black"}}
      >
        <Modal.Header className="bg-danger text-light">
          <Modal.Title >Confirmation ...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={4} text="center">
              <i className="fas fa-exclamation-triangle fa-6x "></i>
            </Col>
            <Col sm={8}>
              <h4>Do you want to delete</h4>
              <h2>{this.props.title}</h2>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button size="lg" variant="primary" onClick={() => {this.closeConfirm(false)}}><i className="far fa-window-close fa-lg fa-a"></i>Cancel</Button>
          <Button size="lg" variant="danger" onClick={() => {this.closeConfirm(true)}}><i className="far fa-trash-alt fa-lg fa-a"></i>Delete</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
