import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Switch, Link } from "react-router-dom";
import { Navbar, Container } from 'react-bootstrap';
import { Button, Row, Col, Card, Form } from 'react-bootstrap';
import Header from '../components/header/Header';
import Dashboard from './Dashboard';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import logo from '../../logo.svg';

class Login extends Component {
  render() {
    return(
        // <div className="App">
          <Row className="mx-0 p-5">
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </Row>
       // </div>
    )
  }
}

export default Login;