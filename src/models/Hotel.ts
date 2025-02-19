import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  rooms: { type: Number, required: true }
});

const Hotel = mongoose.model("Hotel", hotelSchema);
export default Hotel;
