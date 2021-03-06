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
            <Link className='nav-button' to='/ingredients'>
              Ingredients
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
