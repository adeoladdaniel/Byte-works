import React, { useState } from "react";
import {Navbar,  Nav} from "react-bootstrap";
import { Link } from 'react-router-dom';



function Index() {

  return (
    <React.Fragment>
     <Navbar collapseOnSelect expand="lg" variant="dark">
  <Navbar.Brand href="#home"><img  src="./asset/img/LurisBytee.png"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav>
      <Nav.Link >Home </Nav.Link>
      <Nav.Link >
        About
      </Nav.Link>
      <Nav.Link >
      <Link to="/member" style={{color:"black"}}>
        Member
     </Link>
      </Nav.Link>
      <Nav.Link >
        <Link to="/" style={{color:"black"}} x>
           Explore
           </Link>
      </Nav.Link>
      <Nav.Link >
        Contact
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </React.Fragment>
  );
}
export default Index;
