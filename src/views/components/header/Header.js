import React, { Component } from 'react';
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import { BrowserRouter, Router, Routes, Route, Switch, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../App.css';
import logo from '../../../logo.svg';

class Header extends Component {
  // Constructor
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      DatailsLoaded: false
    };
  }

  componentDidMount() {
    fetch('https://fakestoreapi.com/products/categories')
    .then((res) => res.json())
    .then((json) => {
      this.setState({
        categories: json,
        DatailsLoaded: true
      });
    })
  }

  render() {
    const { DatailsLoaded, categories } = this.state;
    return (
      <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
          <img src={logo} className="App-logo d-inline-block align-middle" alt="logo" width="50"
        height="50" />My WebApp
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to={"/"} href="/">Home</Nav.Link>
              <Nav.Link to={"/dashboard"} href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link to={"/products"} href="/products">Products</Nav.Link>
              <NavDropdown title="Categories" id="collasible-nav-dropdown">{
                categories.map((category) => (
                <NavDropdown.Item href={'/category/'+category} >{category}</NavDropdown.Item>
                ))
              }
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
