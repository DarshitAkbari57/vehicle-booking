const express = require('express');
const router = express.Router();
const vehicleTypeController = require('../controllers/vehicleType');

// Route for adding a new vehicle type
router.post('/', vehicleTypeController.addVehicleType);

// Route for fetching all vehicle types
router.get('/', vehicleTypeController.getAllVehicleTypes);

// Get Vehicle Types by Wheels (query parameter)
router.get('/by-wheels', vehicleTypeController.getVehicleTypesByWheels);

// Route for fetching a specific vehicle type by ID
router.get('/:id', vehicleTypeController.getVehicleTypeById);

// Route for editing a vehicle type by ID
router.put('/:id', vehicleTypeController.editVehicleType);

// Route for deleting a vehicle type by ID
router.delete('/:id', vehicleTypeController.deleteVehicleType);


module.exports = router;
