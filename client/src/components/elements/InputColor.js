import React, { Component } from 'react'
import { Button, Modal, Row, Col, Card } from "react-bootstrap";
import { SketchPicker, SliderPicker } from 'react-color';

export default class InputColor extends Component {
  constructor(props){
    super(props);
    this.state = {
      background: props.hex
    }
  }

  handleColorChange = (color) => {
    this.setState( { background: color.hex } );
  };

  closeConfirm = (confirmState) => {
    console.log( "BKG", this.state.background );
    this.props.close( confirmState, this.state.background );
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
      >
        <Modal.Header className="bg-primary text-light">
          <Modal.Title ><i className="fas fa-palette fa-a"></i> Color Picker ...</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-dark">
          <Row>
            <Col sm={3} text="center">
              <h4>Sample:</h4>
              <p></p>
              <Card border="dark" style={{ backgroundColor: `${this.state.background}`, width: '8rem', height:'8rem' }}>
              </Card>
            </Col>
            <Col sm={9}>
              <div>
                <SketchPicker style={{boxShadow: "0px !important"}}
                  disableAlpha={true}
                  width="400"
                  color={ this.state.background }
                  onChange={ this.handleColorChange }
                />
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button size="lg" variant="danger" onClick={() => {this.closeConfirm(false)}}><i className="fas fa-times fa-a"></i>CANCEL</Button>
          <Button size="lg" variant="success" onClick={() => {this.closeConfirm(true)}}><i className="fas fa-check fa-a"></i>ACCEPT</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
/*
              <div style={{width:"250px", height:"100px"}}>
                <SliderPicker
                  color={ this.state.background }
                  onChange={ this.handleColorChange }
                />
              </div>
*/

