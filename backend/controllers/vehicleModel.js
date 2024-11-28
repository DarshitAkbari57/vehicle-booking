// controllers/vehicleModelController.js
const vehicleModelService = require('../services/vehicleModel');

// Add Vehicle Model
exports.addVehicleModel = async (req, res) => {
    try {
        const { name, vehicleTypeId } = req.body;

        if (!name || !vehicleTypeId) {
            return res.status(400).json({ error: 'Name and Vehicle Type ID are required.' });
        }

        const newVehicleModel = await vehicleModelService.createVehicleModel({ name, vehicleTypeId });
        res.status(201).json({ message: 'Vehicle Model added successfully', vehicleModel: newVehicleModel });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to add Vehicle Model', details: error.message });
    }
};

// Get All Vehicle Models
exports.getAllVehicleModels = async (req, res) => {
    try {
        const vehicleModels = await vehicleModelService.getAllVehicleModels();
        res.status(200).json({ message: 'Vehicle Models fetched successfully', vehicleModels });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch Vehicle Models', details: error.message });
    }
};

// Get Vehicle Model by ID
exports.getVehicleModelById = async (req, res) => {
    try {
        const { id } = req.params;

        const vehicleModel = await vehicleModelService.getVehicleModelById(id);
        if (!vehicleModel) {
            return res.status(404).json({ error: 'Vehicle Model not found.' });
        }

        res.status(200).json({ message: 'Vehicle Model fetched successfully', vehicleModel });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch Vehicle Model', details: error.message });
    }
};

// Edit Vehicle Model
exports.editVehicleModel = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, vehicletypeid } = req.body;

        const vehicleModel = await vehicleModelService.getVehicleModelById(id);
        if (!vehicleModel) {
            return res.status(404).json({ error: 'Vehicle Model not found.' });
        }

        const updatedVehicleModel = await vehicleModelService.updateVehicleModel({ id, name, vehicletypeid });
        res.status(200).json({ message: 'Vehicle Model updated successfully', vehicleModel: updatedVehicleModel });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update Vehicle Model', details: error.message });
    }
};

// Delete Vehicle Model
exports.deleteVehicleModel = async (req, res) => {
    try {
        const { id } = req.params;

        const vehicleModel = await vehicleModelService.getVehicleModelById(id);
        if (!vehicleModel) {
            return res.status(404).json({ error: 'Vehicle Model not found.' });
        }

        await vehicleModelService.deleteVehicleModel(id);
        res.status(200).json({ message: 'Vehicle Model deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete Vehicle Model', details: error.message });
    }
};

// Get Vehicle Models by Vehicle Type
exports.getVehicleModelsByType = async (req, res) => {
    try {
        const { vehicletypeid } = req.query;

        if (!vehicletypeid) {
            return res.status(400).json({ error: 'VehicleType ID query parameter is required.' });
        }

        const vehicleModels = await vehicleModelService.getVehicleModelsByType(vehicletypeid);

        if (vehicleModels.length === 0) {
            return res.status(404).json({ message: 'No Vehicle Models found for the given Vehicle Type.' });
        }

        res.status(200).json({ message: 'Vehicle Models fetched successfully', vehicleModels });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch Vehicle Models by Vehicle Type', details: error.message });
    }
};
