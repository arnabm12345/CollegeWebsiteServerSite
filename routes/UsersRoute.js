const express = require('express');

const UserController = require('../controllers/UserController');

const router = express.Router();

// GET /feed/posts
router.get('/user', UserController.getUsers);
module.exports = router;