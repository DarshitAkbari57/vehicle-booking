const db = require('../models'); // Assuming the models are in the models folder

// Add a new booking
exports.addBooking = async (bookingData) => {
    try {
        const booking = await db.Booking.create(bookingData);
        return booking;
    } catch (error) {
        throw new Error("Failed to add booking: " + error.message);
    }
};

// Get all bookings
exports.getAllBookings = async () => {
    try {
        const bookings = await db.Booking.findAll({
            include: [
                {
                    model: db.VehicleTypes,
                    as: 'vehicleType', // Alias defined in the model association
                    attributes: ['id', 'type', 'wheels'],
                },
                {
                    model: db.VehicleModel,
                    as: 'vehicleModel', // Alias defined in the model association
                    attributes: ['id', 'name'],
                }
            ],
        });
        return bookings;
    } catch (error) {
        throw new Error("Failed to fetch bookings: " + error.message);
    }
};

// Get a booking by ID
exports.getBookingById = async (id) => {
    try {
        const booking = await db.Booking.findOne({
            where: { id },
            include: [
                {
                    model: db.VehicleTypes,
                    as: 'vehicleType',
                    attributes: ['id', 'type', 'wheels'],
                },
                {
                    model: db.VehicleModel,
                    as: 'vehicleModel',
                    attributes: ['id', 'name'],
                }
            ],
        });

        if (!booking) {
            throw new Error('Booking not found');
        }

        return booking;
    } catch (error) {
        throw new Error("Failed to fetch booking: " + error.message);
    }
};

// Edit a booking
exports.updateBooking = async (id, bookingData) => {
    try {
        const booking = await db.Booking.findByPk(id);
        if (!booking) {
            throw new Error('Booking not found');
        }
        await booking.update(bookingData);
        return booking;
    } catch (error) {
        throw new Error("Failed to update booking: " + error.message);
    }
};

// Delete a booking
exports.deleteBooking = async (id) => {
    try {
        const booking = await db.Booking.findByPk(id);
        if (!booking) {
            throw new Error('Booking not found');
        }
        await booking.destroy();
        return { message: "Booking deleted successfully" };
    } catch (error) {
        throw new Error("Failed to delete booking: " + error.message);
    }
};
