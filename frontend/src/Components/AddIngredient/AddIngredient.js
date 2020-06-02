import React from 'react';
import './AddIngredient.css';
import axios from 'axios';

class AddIngredient extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      calories: null,
      protein: null,
      ingredients: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteIngredient = this.deleteIngredient.bind(this);
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/ingredients')
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
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const ingredient = {
      name: this.state.name,
      calories: Number(this.state.calories),
      protein: Number(this.state.protein),
    };
    console.log(ingredient);
    axios
      .post('http://localhost:5000/ingredients/add', ingredient)
      .then((res) => console.log(res.data));
    window.location = '/';
  }

  render() {
    return (
      <div className='container'>
        <form action='' onSubmit={this.onSubmit}>
          <input
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
            placeholder='Name'
          />
          <br />
          <input
            type='number'
            name='calories'
            value={this.state.calories}
            onChange={this.handleChange}
            placeholder='Calories Per Gram'
          />
          <br />
          <input
            type='number'
            name='protein'
            value={this.state.protein}
            onChange={this.handleChange}
            placeholder='Protein Per Gram'
          />
          <br />
          <button type='submit'>Add Ingredient</button>
        </form>
      </div>
    );
  }
}

export default AddIngredient;
