import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter, Router, Routes, Route, Switch, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../App.css';
import logo from '../../../logo.svg';

class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
          <img src={logo} className="App-logo d-inline-block align-top" alt="logo" width="50"
        height="50" />
          My WebApp
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to={"/"} href="/">Home</Nav.Link>
              <Nav.Link to={"/dashboard"} href="/dashboard">Dashboard</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
