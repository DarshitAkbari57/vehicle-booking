const db = require("../models");

class VehicleModelService {
    // Get VehicleModel by ID
    getVehicleModelById = async (id) => {
        try {
            const response = await db.VehicleModel.findOne({ where: { id } });
            return JSON.parse(JSON.stringify(response));
        } catch (error) {
            console.log('Error fetching VehicleModel:', error.message);
            throw new Error('Failed to fetch VehicleModel');
        }
    };

    // Get all VehicleModels
    getAllVehicleModels = async () => {
        try {
            const response = await db.VehicleModel.findAll();
            return JSON.parse(JSON.stringify(response));
        } catch (error) {
            console.log('Error fetching VehicleModels:', error.message);
            throw new Error('Failed to fetch VehicleModels');
        }
    };

    // Create new VehicleModel
    createVehicleModel = async (data) => {
        try {
            const response = await db.VehicleModel.create(data);
            return JSON.parse(JSON.stringify(response));
        } catch (error) {
            console.log('Error creating VehicleModel:', error.message);
            throw new Error('Failed to create VehicleModel');
        }
    };

    // Update VehicleModel by ID
    updateVehicleModel = async (data) => {
        try {
            const response = await db.VehicleModel.update(data, { where: { id: data.id } });
            return JSON.parse(JSON.stringify(response));
        } catch (error) {
            console.log('Error updating VehicleModel:', error.message);
            throw new Error('Failed to update VehicleModel');
        }
    };

    // Delete VehicleModel by ID
    deleteVehicleModel = async (id) => {
        try {
            const response = await db.VehicleModel.destroy({ where: { id } });
            return response;
        } catch (error) {
            console.log('Error deleting VehicleModel:', error.message);
            throw new Error('Failed to delete VehicleModel');
        }
    };

    // Get VehicleModels by VehicleType ID
    getVehicleModelsByType = async (vehicletypeid) => {
        try {
            const response = await db.VehicleModel.findAll({ where: { vehicletypeid } });
            return JSON.parse(JSON.stringify(response));
        } catch (error) {
            console.log('Error fetching VehicleModels by VehicleType ID:', error.message);
            throw new Error('Failed to fetch VehicleModels by VehicleType ID');
        }
    };
}

module.exports = new VehicleModelService();
