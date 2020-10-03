import React from "react";
import './Header.css'
import logo from '../../logos/mainLogo.png'
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header" >
      
      <Nav className="justify-content-end" activeKey="/home">
      <img style={{height:'65px', marginRight:'575px'}} src={logo} alt=""/>
        <Nav.Item>
          <Nav.Link className="text-dark" href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-dark" href="/donation">Donation</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-dark" href="/event">Event</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-dark" href="/login">Login</Nav.Link>
        </Nav.Item>
        <Link><Button className="mr-2" variant="primary">Register</Button></Link>
        <Link><Button  variant="dark">Admin</Button></Link>
      </Nav>
      <h1 className="d-flex justify-content-center mt-5"> I GROW BY HELPING PEOPLE NEED </h1>
      <form action="" className="headerFrom">
      <input className="form-control col-sm-5" type="search" name=""placeholder="Search" id=""/>
      <Button variant="primary btn-lg">Search</Button>
      </form>
    </div>
  );
};

export default Header;
