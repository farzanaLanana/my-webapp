import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Button, Row, Col, Card } from 'react-bootstrap';
import Header from '../components/header/Header';
import Login from './Login';
import Dashboard from './Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import logo from '../../logo.svg';

class Home extends Component {
  render() {
    return (
      <Row className="mx-0">
        <Col className="p-5">
        <Card className="p-5 bg-yellow">
          <Card.Body>
            <h2>Welcome to Home! </h2>
          </Card.Body>
        </Card>
        </Col>
      </Row>
    );
  }
}

export default Home;
