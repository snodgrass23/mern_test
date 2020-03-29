const router = require('express').Router();
const { errorHandler } = require('../helpers');
let User = require('../models/user');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(errorHandler(res));
});

router.route('/').post((req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(errorHandler(res));
});

module.exports = router;