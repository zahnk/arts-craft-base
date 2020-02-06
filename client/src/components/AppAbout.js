import React, { Component } from 'react'
import { Button, Modal, Row, Col } from "react-bootstrap";

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
        <Modal.Header className="bg-primary text-light">
          <Modal.Title >ARTS-CRAFT-BASE v.2.0</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={4}>
              <img src="../../arts_craft_base_logo.svg" width="50%" alt="logo" />
            </Col>
            <Col sm={8}>
              <h4>Administration Tool</h4><br />
              <p>This tool can administrate all materials as components for your craft projects and the projects themselves.</p>
              <p>Components can be created and configured by using generic templates, that also can be build by your own, to be more flexible!</p>
            </Col>
          </Row>
          <hr />
          <p>(c) 2020 by <em>Juliane Trapp</em> &amp; <em>Susanne Vogl</em> &amp; <em>Kai Zahn</em> &amp; <em>Dirk Biermann</em></p>
        </Modal.Body>
        <Modal.Footer>
          <Button size="lg" variant="primary" onClick={this.closeAbout}><i className="fas fa-times fa-m-a"></i>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
