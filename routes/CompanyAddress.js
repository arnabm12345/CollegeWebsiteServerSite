const express = require('express');

const adressController = require('../controllers/CompanyAddress');

const router = express.Router();

// GET /feed/posts
router.get('/address', adressController.getAddress);
module.exports = router;