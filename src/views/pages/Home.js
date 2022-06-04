import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Button, Row, Col, Card, Form } from 'react-bootstrap';
import Header from '../components/header/Header';
import Login from './Login';
import Dashboard from './Dashboard';
import Products from './Products';
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import logo from '../../logo.svg';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Row className="justify-content-md-center p-5">
          <Col md={6} lg={4} className="d-flex align-items-stretch">
          <Card className="bg-yellow w-100 bg-home-card">
            <Card.Body></Card.Body>
          </Card>
          </Col>
          <Col md={6} lg={4} className="px-lg-5 pb-5 px-md-2 d-flex align-items-stretch">
            <Form>
            <h3 className="pt-md-3">Account Login</h3>
              <Form.Group className="mb-3 pt-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3 pb-2" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Home;
