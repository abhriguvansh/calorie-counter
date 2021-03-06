import React from 'react';
import './app.css';
import Navbar from '../Navbar/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import IngredientList from '../AddDeleteIngredients/IngredientList';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path='/ingredients' component={IngredientList} />
    </Router>
  );
}

export default App;
