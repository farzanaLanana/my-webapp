import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Button, Row, Col, Card } from 'react-bootstrap';
import Header from '../components/header/Header';
import Home from './Home';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import logo from '../../logo.svg';

class Dashboard extends Component {
  render() {
    return (
      <Row className="mx-0 justify-content-md-center">
        <Col md={8} className="p-5">
        <Card className="px-5 py-3 bg-yellow">
          <Card.Body>
            <h2 className="text-center">Welcome to Dashboard! </h2>
          </Card.Body>
        </Card>
        </Col>
      </Row>
    );
  }
}



export default Dashboard;
