import { Request, Response } from "express";
import Booking from "../models/Booking";

// Create a new booking
export const createBooking = async (req: Request, res: Response) => {
  try {
    const { user, hotelId, checkInDate, checkOutDate, roomsBooked } = req.body;
    const newBooking = new Booking({ user, hotelId, checkInDate, checkOutDate, roomsBooked });
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error creating booking" });
  }
};

// Get all bookings
export const getBookings = async (req: Request, res: Response) => {
  try {
    const bookings = await Booking.find().populate("hotelId");
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Error fetching bookings" });
  }
};

// Update a booking
export const updateBooking = async (req: Request, res: Response) => {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBooking);
  } catch (error) {
    res.status(500).json({ error: "Error updating booking" });
  }
};

// Delete a booking
export const deleteBooking = async (req: Request, res: Response) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: "Booking deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting booking" });
  }
};
