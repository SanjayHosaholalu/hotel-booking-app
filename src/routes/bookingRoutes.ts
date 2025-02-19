import express from "express";
import { createBooking, getBookings, updateBooking, deleteBooking } from "../controllers/bookingController";

const router = express.Router();

router.post("/", createBooking); // Create a new booking
router.get("/", getBookings); // Get all bookings
router.put("/:id", updateBooking); // Modify a booking
router.delete("/:id", deleteBooking); // Cancel a booking

export default router;
