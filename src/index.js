import React from 'react';
// import { BrowserRouter, Routes, Route, Switch, Link } from "react-router-dom";
import App from './App';
import Login from './views/pages/Login';
import Home from './views/pages/Home';
import Category from './views/pages/Category';
import Products from './views/pages/Products';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(<App />, document.getElementById('App'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
