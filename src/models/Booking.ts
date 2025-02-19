import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: { type: String, required: true }, // Hardcoded user
  hotelId: { type: mongoose.Schema.Types.ObjectId, ref: "Hotel", required: true },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
  roomsBooked: { type: Number, required: true }
});

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
