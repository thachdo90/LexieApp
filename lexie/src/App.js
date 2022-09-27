import './App.css';
import React, { useState, useEffect } from 'react';
import Homepage from './components/Homepage.jsx';
const sampleData = require('./components/sampledata.js');
const please = require('./requests.js');

function App() {

  useEffect(() => {
    please.getStudents()
  })
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Lexie
        </h1>
        <Homepage students={sampleData}/>


      </header>
    </div>
  );
}

export default App;
