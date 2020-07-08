//Delete Ingredient Page

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
      nameAdd: '',
      caloriesAdd: null,
      proteinAdd: null,
    };
    this.deleteIngredient = this.deleteIngredient.bind(this);
    this.IngredientList = this.IngredientList.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleProtein = this.handleProtein.bind(this);
    this.handleCalories = this.handleCalories.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleName(e) {
    this.setState({
      nameAdd: e.target.value,
    });
  }
  handleCalories(e) {
    this.setState({
      caloriesAdd: e.target.value,
    });
  }
  handleProtein(e) {
    this.setState({
      proteinAdd: e.target.value,
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
  onSubmit(e) {
    console.log(`adding`);
    e.preventDefault();
    const ingredient = {
      name: this.state.nameAdd,
      calories: Number(this.state.caloriesAdd),
      protein: Number(this.state.proteinAdd),
    };
    console.log(ingredient);
    axios
      .post('http://localhost:5000/ingredients/add', ingredient)
      .then((res) => console.log(res.data));
    window.location = '/ingredients';
  }
  render() {
    axios
      .get('http://localhost:5000/ingredients/')
      .then((res) => {
        this.setState({ ingredients: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
    return (
      <div className='table-div'>
        <form action='' onSubmit={this.onSubmit} className='add-form'>
          <input
            type='text'
            name='nameAdd'
            value={this.state.nameAdd}
            onChange={this.handleName}
            placeholder='Name'
          />
          <br />
          <input
            type='number'
            name='caloriesAdd'
            value={this.state.caloriesAdd}
            onChange={this.handleCalories}
            placeholder='Calories Per Gram'
          />
          <br />
          <input
            type='number'
            name='proteinAdd'
            value={this.state.proteinAdd}
            onChange={this.handleProtein}
            placeholder='Protein Per Gram'
          />
          <br />
          <button type='submit'>Add Ingredient</button>
        </form>
        <table className='ingredient-list'>
          <thead>
            <tr>
              <th className='name'>Name</th>
              <th className='calories'>Calories per gram</th>
              <th className='protein'>Protein per gram</th>
            </tr>
          </thead>
          <tbody className='ingredients'>{this.IngredientList()}</tbody>
        </table>
      </div>
    );
  }
}

export default IngredientList;
