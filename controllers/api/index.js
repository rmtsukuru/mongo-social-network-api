const router = require('express').Router();
const usersController = require('./usersController');
const thoughtsController = require('./thoughtsController');

router.use('/users', usersController);
router.use('/thoughts', thoughtsController);

module.exports = router;
