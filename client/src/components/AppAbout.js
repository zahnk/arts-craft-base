import React, { Component } from 'react'
import { Button, Modal } from "react-bootstrap";

export default class AppAbout extends Component {
  constructor(){
    super()
    this.state = {
    }
  };

  closeAbout = () => {
    this.props.close();
  }

  render() {
    if(!this.props.show){ return null; }
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={this.props.show}
        onHide={this.closeAbout}
      >
        <Modal.Header className="bg-dark text-light">
          <Modal.Title >Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Text in a modal</h4>
          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
          <h4>Popover in a modal</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.closeAbout}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
