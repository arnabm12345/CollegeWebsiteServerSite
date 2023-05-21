const express = require('express');

const Item_MasterController = require('../controllers/Item_MasterController');

const router = express.Router();

// GET /feed/posts
router.post('/item-create', Item_MasterController.createItem);
router.get('/item-getAllUnits', Item_MasterController.getAllItems);
router.get('/item-getAllUnitsBySession/:cid', Item_MasterController.getAllItemsBySession);
router.get('/item-getAllUnitsById/:id', Item_MasterController.getItemById);
router.post('/item-delete',Item_MasterController.deleteItemById);
router.post('/item-update',Item_MasterController.updateItemById);
router.get('/item-getOneUnitsByName/:name/:cid/:grid/:uid', Item_MasterController.getItemByName);

module.exports = router;