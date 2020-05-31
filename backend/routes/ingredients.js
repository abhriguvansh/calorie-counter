const router = require('express').Router();
let ingredient = require('../models/ingredients.model');

router.route('/').get((req, res) => {
  ingredient
    .find()
    .then((ingredients) => res.json(ingredients))
    .catch((err) => res.status(400).json(`Error: ${err} `));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const calories = Number(req.body.calories);
  const protein = Number(req.body.calories);

  const newIngredient = new ingredient({ name, calories, protein });

  newIngredient
    .save()
    .then(() => res.json('Ingredient Added'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {
  ingredient
    .findById(req.params.id)
    .then((ingredients) => res.json(ingredients))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').delete((req, res) => {
  ingredient
    .findByIdAndDelete(req.params.id)
    .then(() => res.json('Ingredient deleted'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/update/:id').post((req, res) => {
  ingredient
    .findById(req.params.id)
    .then((ingredients) => {
      ingredients.name = req.body.name;
      ingredients.calories = req.body.calories;
      ingredients.protein = req.body.protein;

      ingredients
        .save()
        .then(() => res.json('Ingredient updated'))
        .catch((err) => res.status(400).json(`Error: ${err} `));
    })
    .catch((err) => res.status(400).json(`Error: ${err} `));
});
module.exports = router;
