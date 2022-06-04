import React, { Component, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Navbar, Container } from 'react-bootstrap';
import { Button, Row, Col, Card, Form, Spinner } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import Header from '../components/header/Header';
import Login from './Login';
import Home from './Home';
import Category from './Category';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import logo from '../../logo.svg';

function Products() {
    const {id} = useParams();
    const [detailsLoaded, setDetailsLoaded] = useState(false);
    const [product, setProduct] = useState([{ id: '', title: '', category: '', desc: '', price: '', image: '' }]);

    useEffect(() => {
      fetch('https://fakestoreapi.com/products/'+id)
      .then((res) => res.json())
      .then((json) => {
        setProduct({
          id: json.id,
          title: json.title,
          category: json.category,
          desc: json.description,
          price: json.price,
          image: json.image
        })
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
            <h3 className="text-center"> Fetching information.... </h3>
          </Col>
        </Row>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <Row className="justify-content-md-center p-5">
          <Col md={6} lg={4} className="d-flex align-items-stretch">
          <Image className="product-img" variant="top" src={ product.image } />
          </Col>
          <Col md={6} lg={4} className="px-lg-5 pb-5 px-md-2 ">
            <p className="prod-cat cat-title" >Category > { product.category }</p>
            <h3 className="pt-md-3">{ product.title }</h3>
            <h5>RM { product.price }</h5>
            <hr />
            <p>{ product.desc }</p>
          </Col>
        </Row>
      </React.Fragment>
    )
}

export default Products;
