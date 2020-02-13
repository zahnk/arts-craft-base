import React, { Component } from 'react'
import axios from "axios";
import { cloneObject } from "../services/init";
import { Form, Button, InputGroup, Col, Card } from "react-bootstrap";
import '@fortawesome/fontawesome-free/css/all.css';

export default class ComponentCreate extends Component {
  constructor(props){
    super(props)
    this.state = {
      component: {
        name:         "",
        description:  "",
        imageUrl:     "",
        owner:        this.props.user,
        template:     {}
      },
      continueCreate: true,
      templates:    [],
      sel_template: {}
    }
  }

  handleChangeTemplate = event => {
    const tId = event.target.value[0];
    const selTemp = cloneObject(this.state.templates[tId]);
    console.log ("change template", event.target, event.target.name, JSON.stringify( selTemp ) );

    this.setState( { sel_template: selTemp });
  }

  handleChangeComponent = event => {
    console.log ("entry new component", event.target, event.target.name, event.target.value);
    const tempComponent = this.state.component;
    tempComponent[event.target.name] = event.target.value;
    this.setState({
      component: tempComponent
    });
  }

  handleChangeCheck = event => {
    const isChecked = !this.state.continueCreate;
    console.log ("isChecked", isChecked);

    this.setState({ 
      continueCreate: isChecked
    });
  }

  handleCancel = event => {
    this.props.history.push("/components"); 
  }
  
  handleSubmit = event => {
    if (event) { event.preventDefault(); }

    console.log("SUBMIT COMP", JSON.stringify( this.state ));
    axios
      .post("/api/components/create", {
          name: this.state.component.name,
          owner: this.state.component.owner,
          description: this.state.component.description,
          imageUrl: this.state.component.imageUrl,
          template: this.state.sel_template
          //projects: this.state.projects 
        })
        .then(response => {
          console.log("then after post");

          if( !this.state.continueCreate ){
            this.props.history.push("/components"); 
          } else {
            let resetComponent = {
              name:         "",
              description:  "",
              owner:        this.props.user,
              imageUrl:     "",
              template:     {}
            }
            this.setState({
              component: resetComponent
            });
          }
        })
        .catch(err => {
          console.log(err);
        });

      // set a flag that the project got submitted
    this.setState({ 
      submitted: true
    })
  }

  getData = () => {
    axios
      .get("/api/templates")
      .then(response => {
        let selTemp = {};
        if( response.data[0] ){ selTemp = cloneObject( response.data[0] ); }
        this.setState({
          templates: response.data,
          sel_template: selTemp
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
    console.log("CCWT.comp", this.state.component);
    console.log("CCWT.temp", this.state.templates);
    
    const sel_template_desc = this.state.sel_template.description || '';
    let isChecked = this.state.continueCreate

    console.log( "ICX", isChecked );
    return (
      <div style={{textAlign: "left"}}>
        <h2 style={{textAlign: "left", marginBottom: "10px"}}><i className="fas fa-square fa-a"></i>Create Component</h2>
        <Card text="dark" style={{marginBottom: "10px", textAlign: "left" }}>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} md="4">
                  <Form.Label htmlFor="componentName">Component Name: </Form.Label>
                  <Form.Control
                    as="input"
                    type="text"
                    name="name"
                    id="name"
                    value={this.state.component.name}
                    onChange={this.handleChangeComponent}
                  />
                </Form.Group>
                <Form.Group as={Col} md="8">
                  <Form.Label htmlFor="description">Description: </Form.Label>
                  <Form.Control style={{minHeight: "50px"}}
                    rows="5"
                    as="textarea"
                    name="description"
                    id="description"
                    value={this.state.component.description}
                    onChange={this.handleChangeComponent}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="4">
                  <Form.Label htmlFor="imageUrl">Image Url:</Form.Label>
                  <Form.Control
                    as="input"
                    type="text"
                    name="imageUrl"
                    id="imageUrl"
                    value={this.state.component.imageUrl}
                    onChange={this.handleChangeComponent}
                  />
                </Form.Group>

                <Form.Group as={Col} md="8">
                  <Form.Label htmlFor="template">Template:</Form.Label>
                  <InputGroup>
                    <Form.Control style={{flexGrow:2}}
                      as="select"
                      name="c_all_template"
                      onChange={this.handleChangeTemplate}
                    >
                    {
                      this.state.templates.map( (template,i) => {
                        return <option key={`TM_${i}_${template._id}`} value={ [i, template._id] }>{template.name}</option>
                      })
                    }
                    </Form.Control>
                    <Form.Control style={{flexGrow:4}}
                      readOnly
                      as="input"
                      type="text"
                      id="template"
                      name="c_sel_template_desc"
                      value={sel_template_desc || ''}
                    />

                  </InputGroup>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Button className="mr-2 mb-1" size="lg" variant="primary" type="submit" onClick={this.handleCancel}><i className="far fa-window-close fa-lg fa-a"></i>Cancel</Button>            
                <Button className="mr-2 mb-1" size="lg" variant="primary" type="submit"><i className="far fa-save fa-lg fa-a"></i>Submit new Component</Button>
                <Form.Check style={{marginTop: "10px"}}
                  type="switch"
                  name="continueCreate"
                  label="Continue Component Create"
                  id="swt_continue_create"
                  checked={isChecked}
                  onChange={this.handleChangeCheck}
                />
              </Form.Row>
            </Form>
          </Card.Body>
        </Card>

        {this.state.error && (
          <Card body bg="danger" text="white">{this.state.error}</Card>                
        )}
      </div>
    )
  }
}