const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ingredientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 1,
    },
    calories: {
      type: Number,
      required: true,
      trim: true,
    },
    protein: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const ingredient = mongoose.model('Ingredient', ingredientSchema);
module.exports = ingredient;
