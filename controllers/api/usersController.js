const router = require('express').Router();

// User routes
router.route('/').get(getUsers).post(createUser);
// TODO add remaining routes


// User controller methods

async function getUsers(req, res) {
    // TODO implement this
}

async function createUser(req, res) {
    // TODO implement this
}

// TODO add remaining controller methods

module.exports = router;
