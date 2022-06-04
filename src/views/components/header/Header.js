import React, { Component, useEffect, useState } from 'react';
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import { BrowserRouter, Router, Routes, Route, Switch, Link, useNavigate } from "react-router-dom";
import { WithRouter } from '../WithRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../App.css';
import logo from '../../../logo.svg';

function Header() {
  let timer;
  const nav = useNavigate();
  const [categories, setCategories] = useState([])
  const [detailsLoaded, setDetailsLoaded] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
    .then((res) => res.json())
    .then((json) => {
      setCategories(json);
      setDetailsLoaded(true);
      console.log(categories);
    })
  }, []);

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    this.timer = setTimeout(() =>
      nav("/")
    , 2000);
    return () => clearTimeout(timer);
  }

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
            <Nav.Link className="text-warning" onClick={logout}>Logout</Nav.Link>
          }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default Header;
