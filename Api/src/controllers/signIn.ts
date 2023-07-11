import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const login = async (req: Request, res: Response) => {
  const accessToken = jwt.sign("username", "mySecret", {
    expiresIn: "10m",
  });
};
