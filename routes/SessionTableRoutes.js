const express = require('express');

const SessionTableController = require('../controllers/SessionTableController');

const router = express.Router();

// GET /feed/posts
router.get('/user/:id', SessionTableController.getSession);
module.exports = router;