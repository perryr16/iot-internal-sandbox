import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {
  BasicComponent, 
  Header
} from '../components'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <BasicComponent/>
      </header>
    </div>
  );
}

export default App;
