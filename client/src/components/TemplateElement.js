import React, { Component } from 'react'
import { Form, Row, Col, Card, Button } from 'react-bootstrap';
import InputElement from "./elements/InputElement";
import InputCheck from "./elements/InputCheck";
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
        <Card style={{backgroundColor: "rgba(255, 255, 255, 0.125)", marginBottom: "5px", textAlign: "right"}} className="ElementRow">
          <Card.Body>       
            <Form>
              <Row>            
                <Col sm="1" style={{textAlign: "left"}}>
                  <Button size="md" variant="danger" onClick={() => {this.props.delete( this.props.idx )}}><i className="fas fa-times fa-lg"></i></Button>
                  <Form.Label column sm="12"><b>{this.props.curElement.element}</b></Form.Label>
                </Col>
                <Col sm="3">
                  <InputElement idx={0} uniqueKey={`F0${this.props.idx}`}
                    eltype={this.props.curElement.fixedProps[0].typ} 
                    label={this.props.curElement.fixedProps[0].prop} 
                    value={this.props.curElement.fixedProps[0].val || ''}
                    handleChange={this.handleFixedValueChange} s/>
                  <InputElement idx={1} uniqueKey={`F1${this.props.idx}`}
                    eltype={this.props.curElement.fixedProps[1].typ} 
                    label={this.props.curElement.fixedProps[1].prop} 
                    value={this.props.curElement.fixedProps[1].val || ''}
                    handleChange={this.handleFixedValueChange} />
                  <InputElement idx={2} uniqueKey={`F2${this.props.idx}`}
                    eltype={this.props.curElement.fixedProps[2].typ} 
                    label={this.props.curElement.fixedProps[2].prop} 
                    value={this.props.curElement.fixedProps[2].val || ''}
                    handleChange={this.handleFixedValueChange} />
                </Col>
                <Col sm="2">
                  <InputCheck idx={3} uniqueKey={`F3${this.props.idx}`}
                    eltype={this.props.curElement.fixedProps[3].typ} 
                    label={this.props.curElement.fixedProps[3].prop} 
                    value={this.props.curElement.fixedProps[3].val || false}
                    handleChange={this.handleFixedValueChange} />
                  <InputCheck idx={4} uniqueKey={`F4${this.props.idx}`}
                    eltype={this.props.curElement.fixedProps[4].typ} 
                    label={this.props.curElement.fixedProps[4].prop} 
                    value={this.props.curElement.fixedProps[4].val || false}
                    handleChange={this.handleFixedValueChange} />
                </Col>
                <Col sm="3">
                {
                  propCont[0].map( (prop,i) => {
                    if( prop.prop.typ === 'checkbox' ) {
                      return (
                        <InputCheck key={`IE${prop.idx}${this.props.idx}`} idx={prop.idx} uniqueKey={`V${prop.idx}${this.props.idx}`}
                          eltype={prop.prop.typ} 
                          label={prop.prop.prop} 
                          value={prop.prop.val || false}
                          handleChange={this.handleVariableValueChange} />
                      )
                    } else {
                      return (
                        <InputElement key={`IE${prop.idx}${this.props.idx}`} idx={prop.idx} uniqueKey={`V${prop.idx}${this.props.idx}`}
                          eltype={prop.prop.typ} 
                          label={prop.prop.prop} 
                          value={prop.prop.val || '' }
                          handleChange={this.handleVariableValueChange} />
                      )
                    }
                  })
                }
                </Col>
                <Col sm="3">
                {
                  propCont[1].map( (prop,i) => {
                    if( prop.prop.typ === 'checkbox' ) {
                      return (
                        <InputCheck key={`IE${prop.idx}${this.props.idx}`} idx={prop.idx} uniqueKey={`V${prop.idx}${this.props.idx}`}
                          eltype={prop.prop.typ} 
                          label={prop.prop.prop} 
                          value={prop.prop.val || false}
                          handleChange={this.handleVariableValueChange} />
                      )
                    } else {
                      return (
                        <InputElement key={`IE${prop.idx}${this.props.idx}`} idx={prop.idx} uniqueKey={`V${prop.idx}${this.props.idx}`}
                          eltype={prop.prop.typ} 
                          label={prop.prop.prop} 
                          value={prop.prop.val || '' }
                          handleChange={this.handleVariableValueChange} />
                      )
                    }
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
