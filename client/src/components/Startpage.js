import React from "react";
import { login, signup } from "../services/auth";
import { Modal, Form, Button, Row, Col, Card } from "react-bootstrap";
import '../acb.css';

class Startpage extends React.Component {
    state = {
        username: "",
        password: "",
        error: "",
    };

    closeModal = () => {
        this.props.history.push("/");
    }

    handleChange = event => {
        this.setState({
        [event.target.name]: event.target.value,
        error: undefined 
        });
    };

    handleSubmitLogin = event => {
        event.preventDefault();

        login(this.state.username, this.state.password).then(data => {
        if (data.message) {
            // handle errors
            this.setState({
            error: data.message
            });
        } else {
            // no error
            // lift the data up to the App state
            this.props.setUser(data);
            // redirect to "/projects"
            this.props.history.push("/projects");
        }
        });
    };

    handleSubmitSignup = event => {
        event.preventDefault();

        signup(this.state.username, this.state.password).then(data => {
        if (data.message) {
            // handle errors
            this.setState({
            error: data.message
            });
        } else {
            // no error
            // lift the data up to the App state
            this.props.setUser(data);
            // redirect to "/projects"
            this.props.history.push("/projects");
        }
        });
    };

    render() {
        const acb_desc = (
            <div className="sp-d">
                <br />
                <p>This tool can administrate all materials as components for your craft projects and display the project as a Mood-Board.</p>
                <p>Components can be created and configured by using generic templates, that also can be build by your own, to be more flexible!</p>
            </div>
        );

//                        <div className="sp-t">ACB Administration&nbsp;Tool</div>
        let startPage = (
            <div>
                <Row>
                    <Col sm={7}>
                        <div className="sp-shw-lg">{acb_desc}</div>
                    </Col>
                    <Col sm={5}>
                        <div className="sp-c"><img className="lg" src="../acb.png" alt="w" /></div>
                        <div className="sp-shw-sm">{acb_desc}</div>
                    </Col>
                </Row>
                <Row className="sp-k">
                    <Col sm={12} md={6} lg={4}>
                        <Row>
                            <Col sm={12}>
                                <p className="sp-kt">PROJECT</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4} lg={3}>
                                <div className="sp-c"><img className="xlg" src="../sitemap-solid.png" alt="k" width="100%" /></div>
                            </Col>
                            <Col sm={11} lg={9}>
                                <div className="sp-kd">A project defines a craft project and manages related components that are required for implementation.</div>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Row>
                            <Col sm={12}>
                                <p className="sp-kt">COMPONENT</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4} lg={3}>
                                <div className="sp-c"><img className="xlg" src="../square-solid.png" alt="k" width="100%" /></div>
                            </Col>
                            <Col sm={11} lg={9}>
                                <div className="sp-kd">A component defines a material, a tool or a description that can be used to implement the project.</div>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Row>
                            <Col sm={12}>
                                <p className="sp-kt">TEMPLATE</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4} lg={3}>
                                <div className="sp-c"><img className="xlg" src="../square-regular.png" alt="k" width="100%" /></div>
                            </Col>
                            <Col sm={11} lg={9}>
                                <div className="sp-kd">A template is used to define the properties of a component and can be created flexibly.</div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
        let loginPage = (
            <Modal
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={true}
                onHide={this.closeAbout}
                onEntered={()=>{document.getElementById('username').focus()}}
                style={{color:"black"}}
            >
                <Modal.Header className="bg-primary text-light">
                <Modal.Title ><i className="fas fa-sign-in-alt fa-a"></i>Login</Modal.Title>
                </Modal.Header>
                <Form onSubmit={this.handleSubmitLogin}>
                <Modal.Body>
                    <Form.Group>
                    <Form.Label htmlFor="username">Username: </Form.Label>
                    <Form.Control
                        type="text"
                        name="username"
                        id="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    </Form.Group>
                    <Form.Group>
                    <Form.Label htmlFor="password">Password: </Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        id="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    </Form.Group>
                    {this.state.error && (
                    <Card body bg="danger" text="white">{this.state.error}</Card>                
                    )}
                </Modal.Body>
                <Modal.Footer style={{justifyContent: "space-between"}}>
                    <Button size="lg" variant="danger" onClick={this.closeModal}><i className="far fa-window-close fa-lg fa-m-a"></i>Cancel</Button>
                    <Button size="lg" variant="primary" type="submit"><i className="fas fa-sign-in-alt fa-lg fa-m-a"></i>Log in</Button>
                </Modal.Footer>
                </Form>
            </Modal>
        );
        let signupPage = (
            <Modal
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={true}
                onHide={this.closeAbout}
                onEntered={()=>{document.getElementById('username').focus()}}
                style={{color:"black"}}
            >
                <Modal.Header className="bg-primary text-light">
                <Modal.Title ><i className="fas fa-user-plus fa-a"></i>Signup</Modal.Title>
                </Modal.Header>
                <Form onSubmit={this.handleSubmitSignup}>
                <Modal.Body>
                    <Form.Group>
                    <Form.Label htmlFor="username">Username: </Form.Label>
                    <Form.Control
                        type="text"
                        name="username"
                        id="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    </Form.Group>
                    <Form.Group>
                    <Form.Label htmlFor="password">Password: </Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        id="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    </Form.Group>
                    {this.state.error && (
                    <Card body bg="danger" text="white">{this.state.error}</Card>                
                    )}
                </Modal.Body>
                <Modal.Footer style={{justifyContent: "space-between"}}>
                    <Button size="lg" variant="danger" onClick={this.closeModal}><i className="far fa-window-close fa-lg fa-m-a"></i>Cancel</Button>
                    <Button size="lg" variant="primary" type="submit"><i className="fas fa-sign-in-alt fa-lg fa-m-a"></i>Sign up</Button>
                </Modal.Footer>
                </Form>
            </Modal>
        );

        if(!this.props.showLogin && !this.props.showSignup){ return startPage; }
        if(this.props.showLogin ){ return ( <div>{startPage}{loginPage}}</div> ) }
        if(this.props.showSignup){ return ( <div>{startPage}{signupPage}}</div> ) }
        return ( null );
    }

}

export default Startpage;