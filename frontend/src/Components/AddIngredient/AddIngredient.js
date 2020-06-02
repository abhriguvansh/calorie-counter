import React from 'react';
import './AddIngredient.css';

class AddIngredient extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      calories: 0,
      protein: 0,
    };
    this.handleChange = this.handleChange.bind(this);
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
      calories: this.state.calories,
      protein: this.state.protein,
    };
    console.log(ingredient);
    window.location = '/';
  }

  render() {
    return (
      <div className='container'>
        <form action=''>
          <input type='text' name='name' id='' placeholder='Name' />
          <br />
          <input
            type='number'
            name='calories'
            id=''
            placeholder='Calories Per Gram'
          />
          <br />
          <input
            type='number'
            name='protein'
            id=''
            placeholder='Protein Per Gram'
          />
          <br />
          <button type='submit'>Add Ingredient</button>
        </form>
        <div className='list'></div>
      </div>
    );
  }
}

export default AddIngredient;
