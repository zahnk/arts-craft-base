import React, { Component } from 'react'
import axios from "axios";
import ConfirmDelete from "./ConfirmDelete";
import { Form, Button, Col, Row, Card, InputGroup } from "react-bootstrap";
import TemplateElement from "./TemplateElement";
import InputColor from "./elements/InputColor";

export default class TemplateCreate extends Component {
  constructor(){
    super();
    this.state = {
      tc_showConfirm: false,
      tc_showColorConfirm: false,
      tc_all_elements: [{ description: '', variableProps: [{typ:'', disp:''}], fixedProps: [{typ:'', disp:''}] }],
      tc_add_elements: [],

      tc_name: '',
      tc_description: '',

      tc_sel_element_idx: 0,
      tc_sel_element_fp_idx: 0,
      tc_sel_element_vp_idx: 0,
    }
  }

  cloneObject = (obj) => {
    if (obj === null || typeof (obj) !== 'object' || 'isActiveClone' in obj)
        return obj;
    var temp;

    if (obj instanceof Date)
        temp = new obj.constructor(); //or new Date(obj);
    else
        temp = obj.constructor();

    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            obj['isActiveClone'] = null;
            temp[key] = this.cloneObject(obj[key]);
            delete obj['isActiveClone'];
        }
    }
    return temp;
  }

  handleChangeElement = (event) => {
    const foundIndex = this.state.tc_all_elements.findIndex( element => {
      return element._id === event.target.value
    });
    console.log( `CHG idx from ${this.state.tc_sel_element_idx} to ${foundIndex}` );
    this.setState( { tc_sel_element_idx: foundIndex });
  }

  handleChangeFixedProperties = (event) => {
    console.log( "NEW FIX idx", event.target.value );
    this.setState( { tc_sel_element_fp_idx: event.target.value });
  }

  handleChangeVariableProperties = (event) => {
    console.log( "NEW VAR idx", event.target.value );
    this.setState( { tc_sel_element_vp_idx: event.target.value });
  }

  // --------------------------------------------------------

  showConfirmColorChange = () => {
    this.setState({ tc_showColorConfirm: true }); 
  }

  handleColorChangeConfirmed = (dec_confirmState, changedColor ) => {
    console.log( "HCCC", dec_confirmState, changedColor );
    if( dec_confirmState === true ) {
      //this.setState({ tc_showColorConfirm: false, background: changedColor }); 
    } else {
      //this.setState({ tc_showColorConfirm: false }); 
    }
  }

  // --------------------------------------------------------

  addNewElement = () => {
    const matchElement = this.state.tc_all_elements[this.state.tc_sel_element_idx];
    console.log( "ADD N_ELEMENT", matchElement );

    const copyOfAddElements = this.state.tc_add_elements.slice();
    copyOfAddElements.push( this.cloneObject( matchElement ) );

    this.setState( { tc_add_elements : copyOfAddElements });
  }

  // --------------------------------------------------------

  showConfirmDelete = ( idxOfElement ) => {
    this.setState({ tc_showConfirm: true, idxOfElementToDelete: idxOfElement }); 
  }

  deleteElementConfirmed = (dec_confirmState) => {
    console.log( "Delete Element Confirmed:", dec_confirmState, this.state.idxOfElementToDelete );
    const filteredAddElements = this.state.tc_add_elements.filter( (element, i) => {
      return ((dec_confirmState === true) ? this.state.idxOfElementToDelete !== i : true);
    }); 
    this.setState({ tc_showConfirm: false, idxOfElementToDelete: undefined, tc_add_elements: filteredAddElements }); 
  }

  // --------------------------------------------------------
  // --------------------------------------------------------
  // --------------------------------------------------------
  // --------------------------------------------------------
  // --------------------------------------------------------
  // --------------------------------------------------------

  // --------------------------------------------------------

  handleChange = (event) => {
    this.setState( { [event.target.name] : event.target.value });
  }


  // --------------------------------------------------------

  xaddNewElement = () => {
    const matchElement = this.state.tc_all_elements.find( element => {
      return element._id === this.state.s_element._id;
    });
    console.log( "ADD N_ELEMENT", matchElement );

    const copyAddElements = this.state.tc_add_elements.slice();
    copyAddElements.push( Object.assign( matchElement ) );

    this.setState( { tc_add_elements : copyAddElements });
  }

  updateElement = ( props_idx, val_typ, val_idx, value ) => {
    console.log( "UPD U_ELEMEN", props_idx, val_typ, val_idx, value );
  }

  getData = () => {
    axios
      .get("/api/templates/elements")
      .then(response => {
        console.log( "DB_ELEMENTS_0", response.data[0] );
        this.setState({
          tc_all_elements: response.data,
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
    const etDescription = this.state.tc_all_elements[this.state.tc_sel_element_idx].description;
    const etFixTypDisp = this.state.tc_all_elements[this.state.tc_sel_element_idx].fixedProps[this.state.tc_sel_element_fp_idx].disp;
    const etVarTypDisp = this.state.tc_all_elements[this.state.tc_sel_element_idx].variableProps[this.state.tc_sel_element_vp_idx].disp;

    return (
      <div style={{textAlign: "left"}}>
        <h2 style={{textAlign: "left", marginBottom: "10px"}}><i className="far fa-square fa-a"></i>Template Create</h2>
        <Card text="dark" style={{marginBottom: "10px", textAlign:"left"}}>
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
                        name="tc_name"
                        placeholder="Enter Name" 
                        value={this.state.tc_name}
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
                        name="tc_description"
                        placeholder="Enter Description" 
                        value={this.state.tc_description}
                        onChange={this.handleChange}
                      />
                    </Col>
                  </Form.Group>
                </Col>
                <Col sm="8">
                  <Form.Group as={Row}>
                    <Col sm="1">
                    </Col>
                    <Form.Label column sm="11" style={{textAlign: "left"}}><h2>Element Overview</h2></Form.Label>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Col sm="1">
                    </Col>
                    <Form.Label column sm="2">Element Type:</Form.Label>
                    <Col sm="4">
                      <InputGroup>
                        <Form.Control style={{flexGrow:2}}
                          as="select"
                          name="tc_sel_element_type"
                          onChange={this.handleChangeElement}
                        >
                        {
                          this.state.tc_all_elements.map( (element,i) => {
                            return <option key={`ET_${i}_${element._id}`} value={element._id}>{element.element}</option>
                          })
                        }
                        </Form.Control>
                        <Form.Control style={{flexGrow:3}}
                          readOnly
                          as="input"
                          type="text"
                          name="s_element_desc"
                          value={etDescription}
                        />
                      </InputGroup>
                    </Col>
                    <Form.Label column sm="2">Fixed Props:</Form.Label>
                    <Col sm="3">
                      <InputGroup>
                        <Form.Control
                          as="select"
                          name="elementFixedProps"
                          onChange={this.handleChangeFixedProperties}
                        >
                        {
                          this.state.tc_all_elements[this.state.tc_sel_element_idx].fixedProps.map( (fixedProp,i) => {
                            const propInfo = `${fixedProp.prop}`;
                            return <option key={`FP_${i}_${this.state.tc_all_elements[this.state.tc_sel_element_idx]._id}`} value={i}>{propInfo}</option>
                          })
                        }
                        </Form.Control>
                        <Form.Control 
                          readOnly
                          as="input"
                          type="text"
                          name="elementFixedPropsType"
                          value={etFixTypDisp}
                        />
                      </InputGroup>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Col sm="7">
                    </Col>
                    <Form.Label column sm="2">Variable Props:</Form.Label>
                    <Col sm="3">
                      <InputGroup>
                        <Form.Control
                          as="select"
                          name="elementVariableProps"
                          onChange={this.handleChangeVariableProperties}
                        >
                        {
                          this.state.tc_all_elements[this.state.tc_sel_element_idx].variableProps.map( (variableProp,i) => {
                            const propInfo = `${variableProp.prop}`;
                            return <option key={`VP_${i}_${this.state.tc_all_elements[this.state.tc_sel_element_idx]._id}`} value={i}>{propInfo}</option>
                          })
                        }
                        </Form.Control>
                        <Form.Control 
                          readOnly
                          as="input"
                          type="text"
                          name="elementVariablePropsType"
                          value={etVarTypDisp}
                        />
                      </InputGroup>
                    </Col>
                  </Form.Group>
                </Col>
              </Row>
              <Row style={{textAlign: "right"}}>
                <Col sm="4">
                  <Button size="lg" variant="primary" type="submit"><i className="fas fa-save fa-lg fa-a"></i>Submit Template</Button>
                </Col>
                <Col sm="8">
                  <Button size="lg" variant="success" onClick={this.addNewElement}><i className="fas fa-plus-square fa-lg fa-a"></i>Add selected Element</Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>

        {
          this.state.tc_add_elements.map( (oneElement,i) => {
            return <TemplateElement key={`AE_${i}`} idx={i} delete={this.showConfirmDelete} update={this.updateElement} curElement={oneElement}/>
          })
        }

        {this.state.error && (
          <Card body bg="danger" text="white">{this.state.error}</Card>                
        )}

        <ConfirmDelete show={this.state.tc_showConfirm} 
          close={this.deleteElementConfirmed} 
          title={this.state.idxOfElementToDelete ? 
                  ( this.state.tc_add_elements[this.state.idxOfElementToDelete].element):('Element')}/>

        <InputColor show={this.state.tc_showColorConfirm} close={this.handleColorChangeConfirmed} hex={this.state.background} />
      </div>

    )
  }
}
// <Button size="lg" variant="success" onClick={this.showConfirmColorChange}><i className="fas fa-palette fa-lg fa-a"></i>Choose Color</Button>
//             return <TemplateElement key={`AE_${i}`} idx={i} delete={this.showConfirmDelete} update={this.updateElement} curElement={Object.assign(oneElement)}/>
