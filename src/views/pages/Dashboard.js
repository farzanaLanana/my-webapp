import React, { Component } from 'react';
import { Navbar, Container, Spinner } from 'react-bootstrap';
import { Button, Row, Col, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Header from '../components/header/Header';
import Home from './Home';
import Login from './Login';
import Products from './Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import logo from '../../logo.svg';

class Dashboard extends Component {
  // Constructor
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      DatailsLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products?limit=12")
    .then((res) => res.json())
    .then((json) => {
      this.setState({
        products: json,
        DatailsLoaded: true
      });
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    const { DatailsLoaded, products } = this.state;
    if (!DatailsLoaded) return <div>
    <Row className="mx-0 justify-content-md-center">
      <Col className="p-5 text-center">
        <Spinner className="mx-auto" animation="border" variant="warning" />
        <h3 className="text-center"> Fetching products.... </h3>
      </Col>
    </Row>
    </div> ;

    return (
      <React.Fragment>
        <Row className="mx-0 justify-content-md-center">
          <Col md={8} className="p-5">
          <Card className="bg-yellow">
            <Card.Body>
              <h2 className="text-center">Welcome back, User! </h2>
            </Card.Body>
          </Card>
          </Col>
        </Row>
        <Row className="mx-0 justify-content-md-center px-5 pb-5"> {
          products.map((product) => (
          <Col md={6} lg={3} className="p-3 d-flex align-items-stretch">
          <Card className="p-3" style={{ width: '100%' }} key={ product.id }>
            <Card.Img className="product-img" variant="top" src={ product.image } />
            <Card.Body className="d-flex flex-column">
              <Card.Title><Link to={`/products/${product.id}`}>{ product.title }</Link></Card.Title>
              <Card.Text>
                <p>RM { product.price }</p>
              </Card.Text>
              <Button className="btn btn-lg btn-block btn-primary mt-auto" variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          </Col>
          ))
        }
        </Row>
      </React.Fragment>
    );
  }
}



export default Dashboard;
