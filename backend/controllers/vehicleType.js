const vehicleTypeService = require('../services/vehicleType');

// Add a new Vehicle Type
exports.addVehicleType = async (req, res) => {
    try {
        const { type, wheels } = req.body;
        if (!type || !wheels) {
            return res.status(400).json({ error: "Type and wheels are required." });
        }

        const newVehicleType = await vehicleTypeService.createVehicleType({ type, wheels });
        res.status(201).json({ message: "Vehicle Type added successfully", vehicleType: newVehicleType });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to add vehicle type", details: error.message });
    }
};

// Get All Vehicle Types
exports.getAllVehicleTypes = async (req, res) => {
    try {
        const vehicleTypes = await vehicleTypeService.getAllVehicleTypes();
        res.status(200).json({ message: "Vehicle Types fetched successfully", vehicleTypes });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch vehicle types", details: error.message });
    }
};

// Get Vehicle Type by ID
exports.getVehicleTypeById = async (req, res) => {
    try {
        const { id } = req.params;
        const vehicleType = await vehicleTypeService.getVehicleTypeById(id);

        if (!vehicleType) {
            return res.status(404).json({ error: "Vehicle Type not found." });
        }

        res.status(200).json({ message: "Vehicle Type fetched successfully", vehicleType });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch vehicle type", details: error.message });
    }
};

// Edit Vehicle Type
exports.editVehicleType = async (req, res) => {
    try {
        const { id } = req.params;
        const { type, wheels } = req.body;

        const vehicleType = await vehicleTypeService.getVehicleTypeById(id);
        if (!vehicleType) {
            return res.status(404).json({ error: "Vehicle Type not found." });
        }

        const updatedVehicleType = await vehicleTypeService.updateVehicleType({ id, type, wheels });
        res.status(200).json({ message: "Vehicle Type updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to update vehicle type", details: error.message });
    }
};

// Delete Vehicle Type
exports.deleteVehicleType = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await vehicleTypeService.deleteVehicleType(id);
        res.status(200).json({ message: result.message });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to delete vehicle type", details: error.message });
    }
};

// Get Vehicle Types by Wheels
exports.getVehicleTypesByWheels = async (req, res) => {
    try {
        const { wheels } = req.query;

        if (!wheels) {
            return res.status(400).json({ error: "Wheels query parameter is required." });
        }
        const vehicleTypes = await vehicleTypeService.getVehicleTypesByWheels(wheels);

        if (vehicleTypes.length === 0) {
            return res.status(404).json({ message: "No vehicle types found for the given wheel values." });
        }

        return res.status(200).json({ message: "Vehicle Types fetched successfully", vehicleTypes });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch vehicle types by wheels", details: error.message });
    }
};