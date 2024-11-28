// routes/vehicleModelRoutes.js
const express = require('express');
const router = express.Router();
const vehicleModelController = require('../controllers/vehicleModel');

// Add Vehicle Model
router.post('/', vehicleModelController.addVehicleModel);

// Get All Vehicle Models
router.get('/', vehicleModelController.getAllVehicleModels);

// Get Vehicle Models by Vehicle Type
router.get('/by-vehicletype', vehicleModelController.getVehicleModelsByType);

// Get Vehicle Model by ID
router.get('/:id', vehicleModelController.getVehicleModelById);

// Edit Vehicle Model
router.put('/:id', vehicleModelController.editVehicleModel);

// Delete Vehicle Model
router.delete('/:id', vehicleModelController.deleteVehicleModel);


module.exports = router;
