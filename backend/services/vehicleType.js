const db = require("../models");

class VehicleTypeService {
    // Get a vehicle type by ID
    getVehicleTypeById = async (id) => {
        try {
            const response = await db.VehicleTypes.findOne({
                where: { id },
            });
            return JSON.parse(JSON.stringify(response));
        } catch (error) {
            console.log("error : ", error.message);
        }
    };

    // Get all vehicle types
    getAllVehicleTypes = async () => {
        try {
            const response = await db.VehicleTypes.findAll();
            return JSON.parse(JSON.stringify(response));
        } catch (error) {
            console.log("error : ", error.message);
        }
    };

    // Update a vehicle type
    updateVehicleType = async (data) => {
        try {
            const response = await db.VehicleTypes.update(data, {
                where: { id: data.id },
            });
            return JSON.parse(JSON.stringify(response));
        } catch (error) {
            console.log("error : ", error.message);
        }
    };

    // Create a new vehicle type
    createVehicleType = async (data) => {
        try {
            const response = await db.VehicleTypes.create(data);
            return JSON.parse(JSON.stringify(response));
        } catch (error) {
            console.log("error : ", error.message);
        }
    };

    // Delete a vehicle type by ID
    deleteVehicleType = async (id) => {
        try {
            const vehicleType = await db.VehicleTypes.findOne({ where: { id } });
            if (!vehicleType) {
                throw new Error("Vehicle Type not found.");
            }
            await vehicleType.destroy();
            return { message: "Vehicle Type deleted successfully" };
        } catch (error) {
            console.log("error : ", error.message);
            throw new Error("Failed to delete vehicle type");
        }
    };

    // Fetch vehicle types by wheels
    getVehicleTypesByWheels = async (wheels) => {
        try {
            const response = await db.VehicleTypes.findAll({
                where: {
                    wheels // Matching the wheels values
                },
            });
            return JSON.parse(JSON.stringify(response));
        } catch (error) {
            console.log("error : ", error.message);
            throw new Error("Failed to fetch vehicle types by wheels");
        }
    };

}

module.exports = new VehicleTypeService();
