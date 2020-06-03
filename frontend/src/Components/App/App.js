import React from 'react';
import './app.css';
import Navbar from '../Navbar/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddIngredient from '../AddIngredient/AddIngredient';
import IngredientList from '../DeleteIngredient/IngredientList';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path='/add' component={AddIngredient} />
      <Route path='/delete' component={IngredientList} />
    </Router>
  );
}

export default App;
