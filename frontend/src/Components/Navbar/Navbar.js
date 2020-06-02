import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <h1>Calorie Counter</h1>
          </li>
          <li>
            <Link to='/create'>Add Ingredient</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
