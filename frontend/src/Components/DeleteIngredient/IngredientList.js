import React, { Component } from 'react';
import './IngredientList.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Ingredient = (props) => (
  <tr>
    <td>{props.ingredient.name}</td>
    <td>{props.ingredient.calories}</td>
    <td>{props.ingredient.protein}</td>
    <td>
      <Link to={'/edit' + props.ingredient._id}>Edit</Link> |{' '}
      <a
        href='#'
        onClick={() => {
          props.deleteIngredient(props.ingredient._id);
        }}
      >
        Delete
      </a>
    </td>
  </tr>
);

class IngredientList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
    };
    this.deleteIngredient = this.deleteIngredient.bind(this);
    this.IngredientList = this.IngredientList.bind(this);
  }
  componentDidMount() {
    axios
      .get('http://localhost:5000/ingredients/')
      .then((res) => {
        this.setState({ ingredients: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteIngredient(id) {
    axios
      .delete(`http://localhost:5000/ingredients/${id}`)
      .then((res) => console.log(res.data));
    this.setState({
      ingredients: this.state.ingredients.filter((e) => e._id !== id),
    });
  }

  IngredientList() {
    console.log('test');
    return this.state.ingredients.map((currentIngredient) => {
      return (
        <Ingredient
          ingredient={currentIngredient}
          deleteIngredient={this.deleteIngredient}
          key={currentIngredient._id}
        />
      );
    });
  }
  render() {
    return (
      <div className='table-div'>
        <h1 className='table-title'>Your Ingredients</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Calories per gram</th>
              <th>Protein per gram</th>
            </tr>
          </thead>
          <tbody>{this.IngredientList()}</tbody>
        </table>
      </div>
    );
  }
}

export default IngredientList;
