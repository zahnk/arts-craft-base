import React, { Component } from 'react'
import { Form, Row, Col, Card, Button } from 'react-bootstrap';
import InputElement from "./elements/InputElement";
//import CheckBox from '@react-native-community/checkbox';

export default class TemplateElement extends Component {
  constructor(){
    super()
    this.state = {
    }
  }

  handleFixedValueChange = (idx, value, uniqueKey ) => {
    this.props.update( this.props.idx, "fp", idx, value );
  }

  handleVariableValueChange = (idx, value, uniqueKey ) => {
    this.props.update( this.props.idx, "vp", idx, value );
  }

  render() {
    const propCont = [ [], [] ];
      this.props.curElement.variableProps.forEach( (prop,i) => {
      propCont[i%2].push({idx:i, prop:prop});                      
    });

    return (
      <div>
        <Card style={{backgroundColor: "rgba(255, 255, 255, 0.125)", marginBottom: "5px", textAlign: "left"}} className="ElementRow">
          <Card.Body>       
            <Form>
              <Row>            
                <Col sm="2">
                  <Form.Group as={Row}>
                    <Col sm="3">
                      <Button size="md" variant="danger" onClick={() => {this.props.delete( this.props.idx )}}><i className="fas fa-times fa-lg"></i></Button>
                    </Col>
                    <Col sm="9">
                      <Form.Label style={{textAlign: "left"}} column sm="12"><b>{this.props.curElement.element}</b></Form.Label>
                      <Form.Label style={{textAlign: "left"}} column sm="12">[{this.props.idx}]</Form.Label>
                    </Col>
                  </Form.Group>
                </Col>
                <Col sm="2">
                  <InputElement idx={0} uniqueKey={`F0${this.props.idx}`}
                    eltype={this.props.curElement.fixedProps[0].typ} 
                    label={this.props.curElement.fixedProps[0].prop} 
                    value={this.props.curElement.fixedProps[0].val || ''}
                    handleChange={this.handleFixedValueChange} />
                  <InputElement idx={1} uniqueKey={`F1${this.props.idx}`}
                    eltype={this.props.curElement.fixedProps[1].typ} 
                    label={this.props.curElement.fixedProps[1].prop} 
                    value={this.props.curElement.fixedProps[1].val || ''}
                    handleChange={this.handleFixedValueChange} />
                  <InputElement idx={3} uniqueKey={`F3${this.props.idx}`}
                    eltype={this.props.curElement.fixedProps[3].typ} 
                    label={this.props.curElement.fixedProps[3].prop} 
                    value={this.props.curElement.fixedProps[3].val || ''}
                    handleChange={this.handleFixedValueChange} />
                </Col>
                <Col sm="2">
                  <InputElement idx={2} uniqueKey={`F2${this.props.idx}`}
                    eltype={this.props.curElement.fixedProps[2].typ} 
                    label={this.props.curElement.fixedProps[2].prop} 
                    value={this.props.curElement.fixedProps[2].val || false}
                    handleChange={this.handleFixedValueChange} />
                  <InputElement idx={4} uniqueKey={`F4${this.props.idx}`}
                    eltype={this.props.curElement.fixedProps[4].typ} 
                    label={this.props.curElement.fixedProps[4].prop} 
                    value={this.props.curElement.fixedProps[4].val || false}
                    handleChange={this.handleFixedValueChange} />
                </Col>
                <Col sm="3">
                {
                  propCont[0].map( (prop,i) => {
                    return (
                      <InputElement key={`IE${prop.idx}${this.props.idx}`} idx={prop.idx} uniqueKey={`V${prop.idx}${this.props.idx}`}
                        eltype={prop.prop.typ} 
                        label={prop.prop.prop} 
                        value={prop.prop.val || ( prop.prop.typ === 'checkbox' ? false : '' )}
                        handleChange={this.handleVariableValueChange} />
                    )
                  })
                }
                </Col>
                <Col sm="3">
                {
                  propCont[1].map( (prop,i) => {
                    return (
                      <InputElement key={`IE${prop.idx}${this.props.idx}`} idx={prop.idx} uniqueKey={`V${prop.idx}${this.props.idx}`}
                        eltype={prop.prop.typ} 
                        label={prop.prop.prop} 
                        value={prop.prop.val || ( prop.prop.typ === 'checkbox' ? false : '' )}
                        handleChange={this.handleVariableValueChange} />
                    )
                  })
                }
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </div>
    )
  }
}
