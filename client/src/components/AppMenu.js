import React, { Component } from 'react'
import AppAbout from './AppAbout.js';

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { logout } from "../services/auth";
import '@fortawesome/fontawesome-free/css/all.css';

class NavbarDivider extends Component {
  render() {
    return(
        <hr className="menu-h-divider"/>
      )
  }
}

export default class AppMenu extends Component {
  constructor(){
    super()
    this.state = {
      showAbout: false,
    }
  };

  showAbout = () => {
    console.log( "ShowAbout" );
    this.setState({ showAbout: true });
  };

  hideAbout = () => {
    console.log( "HideAbout" );
    this.setState({ showAbout: false });
  };

  handleLogout = () => {
    // destroys the session on the server
    logout();
    // updates the `user` state in App
    this.props.setUser(null);
  };

  render() {
    console.log( "ABT Render" );

    return (
      <div>
        <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark" fixed="top" style={{textAlign: "left"}}>
          <Navbar.Brand>
          <img
            alt="arts-craft-base logo" src="../arts_craft_base_logo.svg"
            width="40" height="40" className="App-logo d-inline-block align-top"
          />{' '}
          </Navbar.Brand>
          <Navbar.Text className="navbarCaption">ARTS CRAFT BASE</Navbar.Text>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          {this.props.user ? (
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                
                <Nav.Link href="/"><i className="fas fa-home fa-lg fa-m-a fa-15x fa-fw"></i>Home</Nav.Link>

                <NavDropdown title={<span><i className="fas fa-sitemap fa-lg fa-m-a fa-15x fa-fw"></i>Project</span>} id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/projects"><i className="fas fa-list fa-lg fa-a fa-15x fa-fw"></i>All Projects</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/projects/create"><i className="far fa-plus-square fa-lg fa-a fa-15x fa-fw"></i>Create new Project</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title={<span><i className="fas fa-square fa-lg fa-m-a fa-15x fa-fw"></i>Component</span>} id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/components"><i className="fas fa-list fa-lg fa-a fa-15x fa-fw"></i>All Components</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/components/create"><i className="far fa-plus-square fa-lg fa-a fa-15x fa-fw"></i>Create new Component</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title={<span><i className="far fa-square fa-lg fa-m-a fa-15x fa-fw"></i>Template</span>} id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/templates"><i className="fas fa-list fa-lg fa-a fa-15x fa-fw"></i>All Templates</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/templates/create"><i className="far fa-plus-square fa-lg fa-a fa-15x fa-fw"></i>Create new Template</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <NavbarDivider />
              <Navbar.Text style={{ padding: "0px", marginRight:"20px"}}><span className="abtSignedIn fa-m-a">Signed in as: <em>{this.props.user.username}</em></span></Navbar.Text>
              <NavbarDivider />
              <Nav>
                <NavDropdown className="xxx" title={<i className="fas fa-ellipsis-v fa-15x fa-fw"></i>} id="collasible-nav-dropdown">
                  <NavDropdown.Item onClick={this.handleLogout}><i className="fas fa-sign-out-alt fa-lg fa-a fa-15x fa-fw"></i>Logout</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={this.showAbout}><i className="fas fa-info-circle fa-lg fa-a fa-15x fa-fw"></i>About</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          ) : (
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/"><i className="fas fa-home fa-lg fa-m-a fa-15x fa-fw"></i>Home</Nav.Link>
              </Nav>
              <Nav>
                <NavDropdown className="xxx" title={<i className="fas fa-ellipsis-v fa-15x fa-fw"></i>} id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/login"><i className="fas fa-sign-in-alt fa-lg fa-a fa-15x fa-fw"></i>Login</NavDropdown.Item>
                  <NavDropdown.Item href="/signup"><i className="fas fa-user-plus fa-lg fa-a fa-15x fa-fw"></i>Signup</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={this.showAbout}><i className="fas fa-info-circle fa-lg fa-a fa-15x fa-fw"></i>About</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          )}
      </Navbar>
      <AppAbout show={this.state.showAbout} close={this.hideAbout} />
    </div>
    )
  }
}
