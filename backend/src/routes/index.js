const express = require('express');
const router = express.Router();
const modelController = require('../controllers/modelController');

// Define the routes
router.get('/models', modelController.getModels);
router.get('/models/:id', modelController.getModelById);

module.exports = router;
