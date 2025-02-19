import { Request, Response } from "express";

export const getHotels = (req: Request, res: Response) => {
  const hotels = [
    { _id: 1, name: "Hotel A", location: "New York", rooms: 10 },
    { _id: 2, name: "Hotel B", location: "Los Angeles", rooms: 5 }
  ];
  res.json(hotels);
};
