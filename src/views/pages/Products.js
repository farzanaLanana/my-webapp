import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Button, Row, Col, Card, Form } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import Header from '../components/header/Header';
import Login from './Login';
import Dashboard from './Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import logo from '../../logo.svg';

class Products extends Component {
  render() {
    return (
      <React.Fragment>
        <Row className="justify-content-md-center p-5">
          <Col md={6} lg={4} className="d-flex align-items-stretch">
          <Image className="product-img" variant="top" src="" />
          </Col>
          <Col md={6} lg={4} className="px-lg-5 pb-5 px-md-2 ">
            <h3 className="pt-md-3">Product Title</h3>
            <h5>RM 10.00</h5>
            <hr />
            <p>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Products;
