import { Response, Request, NextFunction as next } from "express";
import UsersModel from "../models/user.model";
const userModel = new UsersModel();

export const getUser = async (req: Request, res: Response, next: next) => {
  try {
    const user = await userModel.getOneById(+req.params.id);
    res.json(user);
  } catch (err) {
    next(err);
  }
};

export const getAllUsers = async (req: Request, res: Response, next: next) => {
  try {
    const user = await userModel.getAll();
    res.json(user);
  } catch (err) {
    next(err);
  }
};

export const insertUser = async (req: Request, res: Response, next: next) => {
  try {
    const user = await userModel.insert(req.body);
    res.json({ ...user, password: "" });
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req: Request, res: Response, next: next) => {
  try {
    const user = await userModel.delete(+req.params.id);
    res.json(user);
  } catch (err) {
    next(err);
  }
};
