import logo from '../assets/logo.svg';
import '../styles/App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
// import React from 'react';
import { Fragment, BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <Fragment>
    <Header/>
    <Main/>
    <Footer/>
    </Fragment>

  );
}

export default App;
