import React, { Component } from 'react';
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import { BrowserRouter, Router, Routes, Route, Switch, Link, useNavigate } from "react-router-dom";
import { WithRouter } from '../WithRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../App.css';
import logo from '../../../logo.svg';

class Header extends Component {
  // Constructor
  constructor(props) {
    super(props);
    this.logout=this.logout.bind(this);
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

  logout(e) {
    e.preventDefault();
    localStorage.clear();
    this.timer = setTimeout(() =>
      this.props.navigation.navigate('/')
    , 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
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
              <Nav.Link to={"/"} href="/">Home</Nav.Link>{
              categories.map((category) => (
              <Nav.Link className="cat-title" to={'/category/'+category} href={'/category/'+category} key={category}>{category}</Nav.Link>
                ))
              }
            </Nav>
            <Nav>{
              localStorage.getItem("token") === null ? '' :
              <Navbar.Text>Hi, {localStorage.getItem("username")}</Navbar.Text>
            }{
              localStorage.getItem("token") === null ?
              <Nav.Link className="text-warning" to={"/login"} href="/login">Login</Nav.Link> :
              <Nav.Link className="text-warning" onClick={this.logout}>Logout</Nav.Link>
            }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
