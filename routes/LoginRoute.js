const express = require('express');

const LoginControllers = require('../controllers/LoginControllers');

const router = express.Router();

// GET /feed/posts
router.post('/login', LoginControllers.getLogin);
module.exports = router;