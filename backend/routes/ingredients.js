const router = require('express').Router();
let ingredient = require('../models/ingredients.model');

router.route('/').get((req, res) => {
  ingredient
    .find()
    .then((ingredients) => res.json(ingredients))
    .catch((err) =>
      res.status(400).json(`Error: ${err} | Could not find ingredients`)
    );
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const calories = Number(req.body.calories);
  const protein = Number(req.body.calories);

  const newIngredient = new ingredient({ name, calories, protein });

  newIngredient
    .save()
    .then(() => res.json('Ingredient Added'))
    .catch((err) =>
      res.status(400).json(`Error: ${err} | Could not add ingredient`)
    );
});

module.exports = router;
