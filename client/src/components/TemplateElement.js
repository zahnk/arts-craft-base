import React, { Component } from 'react'
import { Form, Row, Col, Card } from 'react-bootstrap';
import InputText from "./elements/InputText";
import InputCheck from "./elements/InputCheck";
//import CheckBox from '@react-native-community/checkbox';

export default class TemplateElement extends Component {
  constructor(props){
    super(props)
    this.state = {
      curElement: props.curElement,
      idx: props.idx
    }
  }

  handleFixedValueChange = (idx, value, uniqueKey ) => {
    const copyElement = this.state.curElement;
    copyElement.fixedProps[idx].val = value;
    this.setState( { curElement : copyElement });
  }

  handleFixedChange = (event, id) => {
    const copyElement = this.state.curElement;
    copyElement.fixedProps[id].val = event.target.value;
    this.setState( { curElement : copyElement });
  }

  handleFixedCheck = (event, id) => {
    const copyElement = this.state.curElement;
    copyElement.fixedProps[id].val = !copyElement.fixedProps[id].val;
    this.setState( { curElement : copyElement });
  }

  removeElement = () => { this.props.remove( this.state.c ); }

  render() {
    return (
      <div>
        <Card style={{backgroundColor: "rgba(0, 0, 0, 0.125)", marginBottom: "5px", textAlign: "left"}} className="ElementRow">
          <Card.Body>       
            <Form>
              <Row>
                <Col sm="1">
                  <Form.Group as={Row}>
                    <Form.Label column sm="12"><b>{this.state.curElement.element}:</b></Form.Label>
                  </Form.Group>
                </Col>
                <Col sm="2">
                  <InputText idx={0} uniqueKey={`0${this.state.idx}`}
                    label={this.state.curElement.fixedProps[0].prop} 
                    value={this.state.curElement.fixedProps[0].val || ''}
                    handleChange={this.handleFixedValueChange} />
                  <InputText idx={1} uniqueKey={`1${this.state.idx}`}
                    label={this.state.curElement.fixedProps[1].prop} 
                    value={this.state.curElement.fixedProps[1].val || ''}
                    handleChange={this.handleFixedValueChange} />
                </Col>
                <Col sm="2">
                  <InputCheck idx={2} uniqueKey={`2${this.state.idx}`}
                    label={this.state.curElement.fixedProps[2].prop} 
                    value={this.state.curElement.fixedProps[2].val || false}
                    handleChange={this.handleFixedValueChange} />
                  <InputCheck idx={4} uniqueKey={`4${this.state.idx}`}
                    label={this.state.curElement.fixedProps[4].prop} 
                    value={this.state.curElement.fixedProps[4].val || false}
                    handleChange={this.handleFixedValueChange} />
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </div>
    )
  }
}
