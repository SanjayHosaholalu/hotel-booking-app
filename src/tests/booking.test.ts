import request from "supertest";
import app from "../app";
import mongoose from "mongoose";
import Booking from "../models/Booking";

describe("Booking API Tests", () => {
  beforeAll(async () => {
    await Booking.deleteMany({});
  });

  it("should create a new booking", async () => {
    const newBooking = {
      user: "test_user",
      hotelId: "65abcd1234abcd5678efabcd", // Replace with a real hotel ID
      checkInDate: "2025-01-01",
      checkOutDate: "2025-01-05",
      roomsBooked: 2
    };

    const res = await request(app).post("/api/bookings").send(newBooking);
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("_id");
  });

  it("should return a list of bookings", async () => {
    const res = await request(app).get("/api/bookings");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
});
