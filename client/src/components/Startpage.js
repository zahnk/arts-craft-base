import React from "react";
import { login } from "../services/auth";
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


    render() {
        let startPage = (
            <div>
                <Row><Col sm={12}><div className="sp-c"><h1>ARTS-CRAFT-BASE</h1></div></Col></Row>
                <Row><Col sm={12}><div className="sp-c"><img className="lg" src="../sewing-m-bkg.png" alt="w" /></div></Col></Row>
            </div>
        );
        let loginPage = (
            <Modal
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={true}
                onHide={this.closeAbout}
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
                    <Button size="lg" variant="danger" onClick={this.closeModal}><i className="fas fa-times fa-m-a"></i>Close</Button>
                    <Button size="lg" variant="primary" type="submit"><i className="fas fa-sign-in-alt fa-m-a"></i>Log in</Button>
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
                    <Button size="lg" variant="danger" onClick={this.closeModal}><i className="fas fa-times fa-m-a"></i>Close</Button>
                    <Button size="lg" variant="primary" type="submit"><i className="fas fa-sign-in-alt fa-m-a"></i>Sign up</Button>
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