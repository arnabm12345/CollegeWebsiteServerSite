const express = require('express');

const Group_MasterController = require('../controllers/Group_MasterController');

const router = express.Router();

// GET /feed/posts
router.post('/group-create', Group_MasterController.createUnit);
router.get('/group-getAllUnits', Group_MasterController.getAllUnits);
router.get('/group-getOneUnits/:id', Group_MasterController.getUnitById);
router.post('/group-delete',Group_MasterController.deleteUnitById);
router.post('/group-update',Group_MasterController.updateUnitById);
router.get('/group-getOneUnitsByName/:name', Group_MasterController.getUnitByName);
router.get('/group-getAllUnitsBySession/:cid', Group_MasterController.getAllUnitsBySession);

module.exports = router;