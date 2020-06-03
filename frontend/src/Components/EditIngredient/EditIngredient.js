import React from 'react';
import './EditIngredient.css';
import axios from 'axios';

class EditIngredient extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      calories: null,
      protein: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/ingredients/' + this.props.match.params.id)
      .then((res) => {
        this.setState({
          name: res.data.name,
          calories: res.data.calories,
          protein: res.data.protein,
        });
      })
      .catch(function (err) {
        console.log(err);
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
      .post(
        'http://localhost:5000/ingredients/update/' +
          this.props.match.params.id,
        ingredient
      )
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
          <button type='submit'>Edit Ingredient</button>
        </form>
      </div>
    );
  }
}

export default EditIngredient;
