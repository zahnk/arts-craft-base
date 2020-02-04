import React, { Component } from 'react'
import { Navbar } from "react-bootstrap";

import '@fortawesome/fontawesome-free/css/all.css';

export default class AppFooter extends Component {
  constructor(){
    super()
      this.state = {
    }
  }

  render() {
    return(
      <Navbar bg="dark" variant="dark" fixed="bottom" style={{textAlign: "left"}}>
        <Navbar.Brand className="icons" style={{fontSize: "0.9rem", color:"rgb(255,255,255,0.5)", padding:"0rem"}}>
          <img alt="s logo" src="../n-logo_w_s.png" className="d-inline-block align-top" />{'  '}
          <img alt="s logo" src="../s-logo_w_s.png" className="d-inline-block align-top" />{' '}
          <img alt="a logo" src="../a-logo_w_s.png" className="d-inline-block align-top" />{'  '}
          <img alt="p logo" src="../p-logo_w_s.png" className="d-inline-block align-top" />{' '}
          <span className="span">(c) 2020 by <em>Juliane</em> &amp; <em>Susanne</em> &amp; <em>Kai</em> &amp; <em>Dirk</em></span>
        </Navbar.Brand>
      </Navbar>
    )
  }
}
