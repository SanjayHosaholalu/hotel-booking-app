import express from "express";
import axios from "axios";

const router = express.Router();

// Home Page - List Hotels
router.get("/", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:5000/api/hotels");
    res.render("index", { hotels: response.data });
  } catch (error) {
    res.status(500).send("Error fetching hotels");
  }
});

// Booking Page
router.get("/book/:id", async (req, res) => {
  try {
    const hotelId = req.params.id;
    const response = await axios.get(`http://localhost:5000/api/hotels`);
    const hotel = response.data.find((h: any) => h._id == hotelId);
    res.render("book", { hotel });
  } catch (error) {
    res.status(500).send("Error loading booking page");
  }
});

// Handle booking form submission
router.post("/confirm-booking", async (req, res) => {
  try {
    const { hotelId, checkInDate, checkOutDate, roomsBooked } = req.body;
    const bookingData = {
      user: "test_user",
      hotelId,
      checkInDate,
      checkOutDate,
      roomsBooked
    };
    console.log(bookingData);
    await axios.post("http://localhost:5000/api/bookings", bookingData);
    res.redirect("/my-bookings");
  } catch (error) {
    res.status(500).send("Error creating booking");
  }
});

// My Bookings Page
router.get("/my-bookings", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:5000/api/bookings");
    res.render("bookings", { bookings: response.data });
  } catch (error) {
    res.status(500).send("Error fetching bookings");
  }
});

// Cancel booking
router.post("/cancel-booking/:id", async (req, res) => {
  try {
    await axios.delete(`http://localhost:5000/api/bookings/${req.params.id}`);
    res.redirect("/my-bookings");
  } catch (error) {
    res.status(500).send("Error canceling booking");
  }
});

export default router;
