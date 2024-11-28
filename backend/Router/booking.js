const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/booking');

// Route to add a new booking
router.post('/', bookingController.addBooking);

// Route to get all bookings
router.get('/', bookingController.getAllBookings);

// Route to get a booking by ID
router.get('/:id', bookingController.getBookingById);

// Route to update a booking
router.put('/:id', bookingController.updateBooking);

// Route to delete a booking
router.delete('/:id', bookingController.deleteBooking);

module.exports = router;
