import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Switch, Link, useNavigate } from "react-router-dom";
import { Navbar, Container, Alert, Spinner } from 'react-bootstrap';
import { Button, Row, Col, Card, Form } from 'react-bootstrap';
import Header from '../components/header/Header';
import WithRouter from '../components/WithRouter';
import Home from './Home';
import Category from './Category';
import Products from './Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import logo from '../../logo.svg';

function Login() {
  const [errorMessages, setErrorMessages] = useState();
  const [isSuccess, setIsSuccess] = useState(false);
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [token, setToken] = useState();
  const [isAuth, setIsAuth] = useState(false);
  const nav = useNavigate();

  const errors = {
    uname: "invalid username",
    pwd: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    setIsAuth(true);
    console.log("authenticating...");
    localStorage.setItem('username', username);

    fetch('https://fakestoreapi.com/auth/login',{
      method:'POST',
      headers: {
          'Content-Type': 'application/JSON',
          'Access-Control-Allow-Origin': '*'
      },
      body:JSON.stringify({
        username: username,
        password: password
      })
    })
    .then(res=>res.json())
    .then(json=>{
      console.log(json);
      localStorage.setItem('token', json.token);
      setToken(json.token);
      setIsAuth(false);
      setIsSuccess(true);
      nav("/");
    })
    .catch((err) => {
      console.log(err);
      setErrorMessages("Invalid username/ password. Login failed");
      setIsAuth(false);
      localStorage.clear();
    });
  };

  const renderForm = (
    <React.Fragment>
      <Row className="justify-content-md-center p-5">
        <Col md={6} lg={4} className="d-flex align-items-stretch">
        <Card className="bg-yellow w-100 bg-home-card">
          <Card.Body></Card.Body>
        </Card>
        </Col>
        <Col md={6} lg={4} className="px-lg-5 pb-5 px-md-2 d-flex align-items-stretch">
          <Form onSubmit={handleSubmit} id="loginForm">
          <h3 className="pt-md-3">User Login</h3>
            <Form.Group className="mb-3 pt-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" name="uname" placeholder="Enter username" onChange={e => setUserName(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3 pb-2" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="pwd" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
            </Form.Group>
            <Button className="btn-block" variant="primary" type="submit" form="loginForm">
              Login { isAuth ? <Spinner className="pt-2" animation="border" variant="light" size="sm" /> : ''}
            </Button>
          </Form>
        </Col>
      </Row>
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <Row className="mx-0 justify-content-md-center">
        <Col className="p-5 p-md-3">
        { !errorMessages && isSuccess ? 'Success' : renderForm }
        </Col>
      </Row>
    </React.Fragment>
  );
}


export default Login;
