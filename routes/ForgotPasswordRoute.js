const express = require('express');

const ForgotPasswordController = require('../controllers/ForgotPasswordController');

const router = express.Router();

// GET /feed/posts
router.post('/forgot', ForgotPasswordController.getPassword);
module.exports = router;