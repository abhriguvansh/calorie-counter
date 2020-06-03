import React, { Component } from 'react';
import './Navbar.css';
import { Link, Router } from 'react-router-dom';
class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <h1 className='title'>Calorie Counter</h1>
          </li>
          <li>
            <Link to='/add'>Add Ingredient</Link>
          </li>
          <li>
            <Link to='/delete'>Delete Ingredient</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
