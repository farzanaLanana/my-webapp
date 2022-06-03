import React, { Component } from 'react';
import { BrowserRouter, Router, Routes, Route, Switch, Link } from "react-router-dom";
import { Navbar, Button, Row, Col, Form } from 'react-bootstrap';
import Header from './views/components/header/Header';
import Dashboard from './views/pages/Dashboard';
import Login from './views/pages/Login';
import Home from './views/pages/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path='/' exact element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;