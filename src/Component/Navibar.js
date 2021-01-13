// import { Component } from 'react';
import {
  Button,
  Form,
  Nav,
  FormControl,
  // NavDropdown,
  Navbar
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import scale from '../logo/scale.jpg'

function Navibar() {
  return (
    <>
      <Navbar variant="dark" style={{backgroundColor:"#6495ED"}}>
        <img src={scale} alt="" width="30" height="24" class="d-inline-block align-top" />
        <Navbar.Brand href="/home">Scale Network</Navbar.Brand>
        <Nav className="mr-auto" >
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/product">Product</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/company">Company</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About Us</a>
              </li>
            </ul>
          </div>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    </>
  );
}
export default Navibar;
