import React from 'react';
import logo from '../logo.svg';
import {BrowserRouter} from 'react-router-dom'
import '../App.css';
import {
  Body,
  Header,
  IotRouter,
} from '../components'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Header />
          <IotRouter/>
          <Body/>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
