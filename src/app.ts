import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import bodyParser from "body-parser";

import hotelRoutes from "./routes/hotelRoutes";
import bookingRoutes from "./routes/bookingRoutes";
import frontendRoutes from "./routes/frontendRoutes";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/hotels", hotelRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/", frontendRoutes);

app.get("/", (req, res) => {
  res.send("Hotel Booking API is running...");
});

export default app;
