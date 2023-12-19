import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Main from './components/main/main';
import Services from './components/services/services';
import Footer from './components/footer/footer';
import About from './components/about-us/about-us';
import Contacts from './components/contacts/contact';
import Questions from './components/questions/questions';


export class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Main/>
        <About />
        <Services />
        <Contacts/>
        <Questions/>
        <Footer/>
      </>
    )
  }
}

export default App