const router = require('express').Router();
const { User } = require('../../models');

// User routes
router.route('/').get(getUsers).post(createUser);
router.route('/:userId').get(getUser).put(updateUser).delete(deleteUser);
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

async function getUser(req, res) {
  try {
    const user = await User.findOne({ _id: req.params.userId })
      .select('-__v');
    if (user) {
      res.json({ user });
    } else {
      res.status(404).json({ message: 'No user with that ID found' });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

async function updateUser(req, res) {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    );
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'No user with that ID found' });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

async function deleteUser(req, res) {
  try {
    const user = await User.findOneAndDelete({ _id: req.params.userId });
    if (user) {
      // Delete user's associated thoughts
      Thought.deleteMany({ _id: { $in: user.thoughts } })
      res.json({ message: 'User successfully deleted' });
    } else {
      res.status(404).json({ message: 'No user with that ID found' });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

// TODO add remaining controller methods

module.exports = router;
