const express = require('express');

const Unit_MasterController = require('../controllers/Unit_MasterController');

const router = express.Router();

// GET /feed/posts
router.post('/unit-create', Unit_MasterController.createUnit);
router.get('/unit-getAllUnits', Unit_MasterController.getAllUnits);
router.get('/unit-getOneUnits/:id', Unit_MasterController.getUnitById);
router.post('/unit-delete',Unit_MasterController.deleteUnitById);
router.post('/unit-update',Unit_MasterController.updateUnitById);
router.get('/unit-getOneUnitsByName/:name', Unit_MasterController.getUnitByName);
router.get('/unit-getAllUnitsBySession/:cid', Unit_MasterController.getAllUnitsBySession);


module.exports = router;