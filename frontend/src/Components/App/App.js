import React from 'react';
import './app.css';
import Navbar from '../Navbar/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
