import React, { Component } from 'react'
import axios from "axios";
import ConfirmDelete from "./ConfirmDelete";
import { Form, Button, Col, Row, Card, InputGroup } from "react-bootstrap";
import TemplateElement from "./TemplateElement";
import InputColor from "./elements/InputColor";

export default class TemplateCreate extends Component {
  constructor(props){
    super(props);
    this.state = {
      tc_owner: this.props.user,
      tc_curTemplateIdx: (this.props.match.params.id || undefined ),

      tc_name: '',
      tc_description: '',
      tc_all_elements: [{ description: '', variableProps: [{typ:'', disp:''}], fixedProps: [{typ:'', disp:''}] }],
      tc_add_elements: [],

      tc_sel_element_idx: 0,
      tc_sel_element_fp_idx: 0,
      tc_sel_element_vp_idx: 0,

      tc_showConfirmDeleteElement: false,
      tc_showConfirmDeleteTemplate: false,
      tc_showColorConfirm: false,
      tc_loading: true
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
    this.setState( { tc_sel_element_idx: foundIndex });
  }

  handleChangeFixedProperties = (event) => {
    this.setState( { tc_sel_element_fp_idx: event.target.value });
  }

  handleChangeVariableProperties = (event) => {
    this.setState( { tc_sel_element_vp_idx: event.target.value });
  }

  updateElement = (elIdx, propTyp, propIdx, propVal ) => {
    const matchElement = this.state.tc_add_elements[elIdx];

    if( propTyp === 'fp' ) {
      matchElement.fixedProps[propIdx].val = propVal;
    } else {
      matchElement.variableProps[propIdx].val = propVal;        
    }
    const copyOfAddElements = this.state.tc_add_elements.slice();
    this.setState( { tc_add_elements : copyOfAddElements });
  }

  // --------------------------------------------------------

  showConfirmColorChange = () => {
    this.setState({ tc_showColorConfirm: true }); 
  }

  handleColorChangeConfirmed = (dec_confirmState, changedColor ) => {
    if( dec_confirmState === true ) {
      //this.setState({ tc_showColorConfirm: false, background: changedColor }); 
    } else {
      //this.setState({ tc_showColorConfirm: false }); 
    }
  }

  // --------------------------------------------------------

  addNewElement = () => {
    const matchElement = this.state.tc_all_elements[this.state.tc_sel_element_idx];

    const copyOfAddElements = this.state.tc_add_elements.slice();
    copyOfAddElements.push( this.cloneObject( matchElement ) );

    this.setState( { tc_add_elements : copyOfAddElements });
  }

  // --------------------------------------------------------

  showConfirmDeleteElement = ( idxOfElement ) => {
    this.setState({ tc_showConfirmDeleteElement: true, idxOfElementToDelete: idxOfElement }); 
  }

  deleteElementConfirmed = (dec_confirmState) => {
    if( this.state.tc_showConfirmDeleteElement ) {
      const filteredAddElements = this.state.tc_add_elements.filter( (element, i) => {
          return ((dec_confirmState === true) ? this.state.idxOfElementToDelete !== i : true);
        }); 
      this.setState({ tc_showConfirmDeleteElement: false, idxOfElementToDelete: undefined, tc_add_elements: filteredAddElements }); 
    }
    if( this.state.tc_showConfirmDeleteTemplate ) {
      if( dec_confirmState === true ) {
        const deletePath = `/api/templates/${this.state.tc_curTemplateIdx}`;
        axios.delete(deletePath)
          .then(() => {
            this.props.history.push("/templates")
          })
          .catch(err => {
            console.log(err);
          })
      } else {
        this.setState({ tc_showConfirmDeleteTemplate: false }); 
      }
    }
  }

  showConfirmDeleteTemplate = ( idxOfTemplate ) => {
    this.setState({ tc_showConfirmDeleteTemplate: true }); 
  }

  // --------------------------------------------------------

  handleSubmit = (event) => {
    if (event) { event.preventDefault(); }

    if( this.state.tc_curTemplateIdx ) {
      console.log( "UPDATE", this.state.tc_curTemplateIdx  );
      this.setState( null );
    } else {
      axios
        .post("/api/templates/create", { 
          info: "CreateTemplate",
          data: {
            name: this.state.tc_name,
            owner: this.state.tc_owner,
            description: this.state.tc_description,
            elements: this.state.tc_add_elements          
          }
        })
        .then(response => {
          this.setState({
            tc_add_elements: [],

            tc_name: '',
            tc_description: '',
          });
        })
        .catch(err => {
          console.log("POST-ERR", err);
        });
    }
  };

  handleChange = (event) => {
    this.setState( { [event.target.name] : event.target.value });
  }

  // --------------------------------------------------------

  getAllData = async () => {
    console.log("TMPID", this.state.tc_curTemplateIdx );
    let [allElements, currentTemplate] = await Promise.all([
        axios.get("/api/templates/elements"),
        axios.get(`/api/templates/${this.state.tc_curTemplateIdx}`)
    ]);
    this.setState({
      tc_name: currentTemplate.data.name || '',
      tc_description: currentTemplate.data.description || '',
      tc_add_elements: currentTemplate.data.elements || [],
      tc_all_elements: allElements.data || [],
      tc_loading: false
    });
  }

  getElemData = async () => {
    let [allElements] = await Promise.all([
        axios.get("/api/templates/elements"),
    ]);
    console.log("ALL", allElements.data);

    this.setState({
      tc_name: '',
      tc_description: '',
      tc_add_elements: [],
      tc_all_elements: allElements.data || [],
      tc_loading: false
    });

  }

  componentDidMount() {
    if(  this.state.tc_curTemplateIdx )
      this.getAllData();
    else
      this.getElemData();
  }

  // --------------------------------------------------------

  render() {
    const etDescription = this.state.tc_all_elements[this.state.tc_sel_element_idx].description;
    const etFixTypDisp = this.state.tc_all_elements[this.state.tc_sel_element_idx].fixedProps[this.state.tc_sel_element_fp_idx].disp;
    const etVarTypDisp = this.state.tc_all_elements[this.state.tc_sel_element_idx].variableProps[this.state.tc_sel_element_vp_idx].disp;

    if( this.state.tc_curTemplateIdx && this.state.tc_loading ) return (<div>Loading ...</div>); 
    let delTitle = "";

    if( this.state.tc_showConfirmDeleteElement ) {
        delTitle = `Element: ${this.state.idxOfElementToDelete ? this.state.tc_add_elements[this.state.idxOfElementToDelete].element : ''}`;
    }
    if( this.state.tc_showConfirmDeleteTemplate ) {
        delTitle = `Template: ${this.state.tc_name ? this.state.tc_name : ''}`;
    }

    return (
      <div style={{textAlign: "left"}}>
        <h2 style={{textAlign: "left", marginBottom: "10px"}}>
          <i className="far fa-square fa-a"></i>Template {this.state.tc_curTemplateIdx ? "Update" : "Create" }
        </h2>
        <Card text="dark" style={{marginBottom: "10px", textAlign:"left"}}>
          <Card.Body>       
            <Form onSubmit={this.handleSubmit}>
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
                  { this.state.tc_curTemplateIdx ? 
                    ( 
                      <div>
                        <Button size="lg" variant="danger" className="mr-2" onClick={() => {this.showConfirmDeleteTemplate( this.state.tc_curTemplateIdx )}}><i className="fas fa-times fa-lg fa-a"></i>Delete Template</Button>
                        <Button size="lg" variant="primary" type="submit"><i className="fas fa-save fa-lg fa-a"></i>Update Template</Button>
                      </div>
                    ):( 
                      <Button size="lg" variant="primary" type="submit"><i className="fas fa-save fa-lg fa-a"></i>Submit Template</Button>
                    )
                  }  
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

        <ConfirmDelete show={this.state.tc_showConfirmDeleteElement || this.state.tc_showConfirmDeleteTemplate } 
          close={this.deleteElementConfirmed} 
          title={delTitle}
        />

        <InputColor show={this.state.tc_showColorConfirm} close={this.handleColorChangeConfirmed} hex={this.state.background} />
      </div>

    )
  }
}
// <Button size="lg" variant="success" onClick={this.showConfirmColorChange}><i className="fas fa-palette fa-lg fa-a"></i>Choose Color</Button>
//             return <TemplateElement key={`AE_${i}`} idx={i} delete={this.showConfirmDelete} update={this.updateElement} curElement={Object.assign(oneElement)}/>
