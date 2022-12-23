const router = require('express').Router();
const { User } = require('../../models');

// User routes
router.route('/').get(getUsers).post(createUser);
// TODO add remaining routes


// User controller methods

async function getUsers(req, res) {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

async function createUser(req, res) {
  try {
    const user = await User.create(req.body);
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

// TODO add remaining controller methods

module.exports = router;
