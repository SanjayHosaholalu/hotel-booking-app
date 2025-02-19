import request from "supertest";
import app from "../app";

describe("Hotel API Tests", () => {
  it("should return a list of hotels", async () => {
    const res = await request(app).get("/api/hotels");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
