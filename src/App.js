import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from "./context";
import Puhelintieto from './components/Puhelintieto';
import Puhelintiedot from './components/Puhelintiedot';
import Ylatunniste from './Ylatunniste';

function App() {
  return (
    <Provider>
    <div className="App">
      <Ylatunniste turvataso="olematon"/>
      <div className="container">
        <Puhelintiedot />
      </div>
    </div>
    </Provider>
  );
}

export default App;
// jääty diaan 48 17.6.2022