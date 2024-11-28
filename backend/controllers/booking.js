const bookingService = require("../services/booking");

// Add a new booking
exports.addBooking = async (req, res) => {
  try {
    const bookingData = req.body;
    const booking = await bookingService.addBooking(bookingData);
    return res.status(201).json({
      message: "Booking created successfully",
      booking,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

// Get all bookings
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await bookingService.getAllBookings();
    return res.status(200).json({
      message: "Bookings fetched successfully",
      bookings,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

// Get booking by ID
exports.getBookingById = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await bookingService.getBookingById(id);
    return res.status(200).json({
      message: "Booking fetched successfully",
      booking,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

// Edit a booking
exports.updateBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const bookingData = req.body;
    const updatedBooking = await bookingService.updateBooking(id, bookingData);
    return res.status(200).json({
      message: "Booking updated successfully",
      booking: updatedBooking,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

// Delete a booking
exports.deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await bookingService.deleteBooking(id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};
