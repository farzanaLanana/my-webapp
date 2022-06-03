import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter, Router, Routes, Route, Switch, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../App.css';
import logo from '../../../logo.svg';

class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
          <img src={logo} className="App-logo d-inline-block align-top" alt="logo" />
          My WebApp
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to={"/"} href="/">Home</Nav.Link>
            <Nav.Link to={"/login"} href="/login">Login</Nav.Link>
            <Nav.Link to={"/dashboard"} href="/dashboard">Dashboard</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
