import React, { Component } from 'react'
import axios from "axios";
import ConfirmDelete from "./ConfirmDelete";
import { Form, Button, Col, Row, Card, InputGroup } from "react-bootstrap";
import TemplateElement from "./TemplateElement";

export default class TemplateCreate extends Component {
  constructor(props){
    super(props)
    this.state = {
      showConfirm: false,
      all_elements: [],
      t_name: 'x',
      description: 'x',
      t_elements: [{},{},{}],
      s_element: { description: '', variableProps: [{typ:''}], fixedProps: [{typ:''}] },
      s_element_fp: '',
      s_element_vp: '',
    }
  }

  showConfirmDelete = () => {
    this.setState({ showConfirm: true }); 
  }

  deleteElementConfirmed = (confirmState) => {
    console.log( "Delete Element Confirmed:", confirmState );
    if( confirmState === true ){
      //this.handleDelete();
    }
    this.setState({ showConfirm: false }); 
  }

  handleChangeFixedProperties = (event) => {
    console.log( "EP", this.state.s_element.fixedProps[event.target.value].typ );
    this.setState( {s_element_fp: this.state.s_element.fixedProps[event.target.value].typ });
  }

  handleChangeVariableProperties = (event) => {
    this.setState( {s_element_vp: this.state.s_element.variableProps[event.target.value].typ });
  }

  handleChangeElement = (event) => {
    const matchElement = this.state.all_elements.find( element => {
      return element._id === event.target.value
    });
    this.setState( { s_element: matchElement,
                     s_element_fp: matchElement.fixedProps[0].typ,
                     s_element_vp: matchElement.variableProps[0].typ });
  }

  handleChange = (event) => {
    this.setState( { [event.target.name] : event.target.value });
  }

  getData = () => {
    axios
      .get("/api/templates/elements")
      .then(response => {
        this.setState({
          all_elements: response.data,
          s_element: response.data[0] || {}, 
          s_element_fp: response.data[0].fixedProps[0].typ || '',
          s_element_vp: response.data[0].variableProps[0].typ || '' 
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        <Card bg="secondary" text="white" style={{marginBottom: "10px"}}>
          <Card.Header as="h2"><i className="far fa-square fa-a"></i>Template Create</Card.Header>
        </Card>

        <Card style={{marginBottom: "10px", textAlign:"left"}}>
          <Card.Body>       
            <Form>
              <Row>
                <Col sm="4">
                  <Form.Group as={Row}>
                    <Form.Label column sm="3">Template Name:</Form.Label>
                    <Col sm="9">
                      <Form.Control 
                        as="input"
                        type="text"
                        name="t_name"
                        placeholder="Enter Name" 
                        value={this.state.t_name}
                        onChange={this.handleChange}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Form.Label column sm="3">Description:</Form.Label>
                    <Col sm="9">
                      <Form.Control style={{minHeight: "50px"}}
                        rows="3"
                        as="textarea"
                        name="t_description"
                        placeholder="Enter Description" 
                        value={this.state.t_description}
                        onChange={this.handleChange}
                      />
                    </Col>
                  </Form.Group>
                </Col>
                <Col sm="8">
                  <Form.Group as={Row}>
                    <Form.Label column sm="2">Element Type:</Form.Label>
                    <Col sm="4">
                      <InputGroup>
                        <Form.Control style={{flexGrow:2}}
                          as="select"
                          name="s_element_Type"
                          onChange={this.handleChangeElement}
                        >
                        {
                          this.state.all_elements.map( (element,i) => {
                            return <option key={`ET_${i}_${element._id}`} value={element._id}>{element.element}</option>
                          })
                        }
                        </Form.Control>
                        <Form.Control style={{flexGrow:3}}
                          readOnly
                          as="input"
                          type="text"
                          name="s_element_desc"
                          value={this.state.s_element.description}
                        />
                      </InputGroup>
                    </Col>
                    <Form.Label  column sm="2">Fixed Props:</Form.Label>
                    <Col sm="4">
                      <InputGroup>
                        <Form.Control
                          as="select"
                          name="elementFixedProps"
                          onChange={this.handleChangeFixedProperties}
                        >
                        {
                          this.state.s_element.fixedProps.map( (fixedProp,i) => {
                            const propInfo = `${fixedProp.prop}`;
                            return <option key={`FP_${i}_${this.state.s_element._id}`} value={i}>{propInfo}</option>
                          })
                        }
                        </Form.Control>
                        <Form.Control 
                          readOnly
                          as="input"
                          type="text"
                          name="elementFixedPropsType"
                          value={this.state.s_element_fp}
                        />
                      </InputGroup>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Col sm="6">
                    </Col>
                    <Form.Label column sm="2">Variable Props:</Form.Label>
                    <Col sm="4">
                      <InputGroup>
                        <Form.Control
                          as="select"
                          name="elementVariableProps"
                          onChange={this.handleChangeVariableProperties}
                        >
                        {
                          this.state.s_element.variableProps.map( (variableProp,i) => {
                            const propInfo = `${variableProp.prop}`;
                            return <option key={`VP_${i}_${this.state.s_element._id}`} value={i}>{propInfo}</option>
                          })
                        }
                        </Form.Control>
                        <Form.Control 
                          readOnly
                          as="input"
                          type="text"
                          name="elementVariablePropsType"
                          value={this.state.s_element_vp}
                        />
                      </InputGroup>
                    </Col>
                  </Form.Group>
                </Col>
              </Row>
              <Row style={{textAlign: "right"}}>
                <Col sm="4">
                  <Button size="lg" variant="primary" type="submit"><i className="far fa-save fa-lg fa-a"></i>Submit Template</Button>
                </Col>
                <Col sm="8">
                  <Button size="lg" variant="success" type=""><i className="far fa-plus-square fa-lg fa-a"></i>Add Element</Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>

        {
          this.state.all_elements.map( (oneElement,i) => {
            return <TemplateElement key={`TE_${i}`} idx={i} delete={this.showConfirmDelete} curElement={oneElement}/>
          })
        }

        {this.state.error && (
          <Card body bg="danger" text="white">{this.state.error}</Card>                
        )}

        <ConfirmDelete show={this.state.showConfirm} close={this.deleteElementConfirmed} title={'Element'} />

      </div>
    )
  }
}
