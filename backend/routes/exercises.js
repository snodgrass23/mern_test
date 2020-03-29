const router = require('express').Router();
const { errorHandler } = require('../helpers');
let Exercise = require('../models/exercise');

router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(errorHandler(res));
});

router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(errorHandler(res));
});

router.route('/:id').post((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(errorHandler(res));
    })
    .catch(errorHandler(res));
});

router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(exercise => res.json('Exercise deleted.'))
    .catch(errorHandler(res));
});

router.route('/add').post((req, res) => {
  const { username, description } = req.body;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);
  const newExercise = new Exercise({ username, description, duration, date });

  newExercise.save()
    .then(() => res.json('Exercise added!'))
    .catch(errorHandler(res));
});

module.exports = router;