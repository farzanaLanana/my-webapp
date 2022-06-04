import React, { Component, useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { Navbar, Container } from 'react-bootstrap';
import { Button, Row, Col, Card, Form, Spinner } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import Header from '../components/header/Header';
import Login from './Login';
import Dashboard from './Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import logo from '../../logo.svg';

function Category() {
    const {category} = useParams();
    const [detailsLoaded, setDetailsLoaded] = useState(false);
    const [productList, setProductList] = useState();


    useEffect(() => {
      fetch('https://fakestoreapi.com/products/category/'+category)
      .then((res) => res.json())
      .then((json) => {
        setProductList(json)
        setDetailsLoaded(true)
      }).catch((err) => {
        console.log(err);
      });
    }, []);

    if (!detailsLoaded){
      return(
        <React.Fragment>
        <Row className="mx-0 justify-content-md-center">
          <Col className="p-5 text-center">
            <Spinner className="mx-auto" animation="border" variant="warning" />
            <h3 className="text-center"> Fetching products.... </h3>
          </Col>
        </Row>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <Row className="mx-0 justify-content-md-center p-5"> {
          productList.map((product) => (
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
    )
}

export default Category;
