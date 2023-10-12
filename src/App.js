import React, { Component } from 'react';
import './App.css';
import './custom-style.css';
import Header from './components/header';
import Banner from './components/banner';
import Discoverdrops from './components/discoverdrops';
function App() {
  return (
    <div className="App page-main bg-black relative">
      <Header></Header>
      <Banner></Banner>
     <Discoverdrops></Discoverdrops>
    </div>
  );
}

export default App;
