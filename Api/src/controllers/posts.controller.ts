import { Response, Request, NextFunction  } from "express";
import PostsModel from "../models/posts.model";
const postModel = new PostsModel();

export const getPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const post = await postModel.getOneById(+req.params.id);
    res.json(post);
  } catch (err) {
    next(err);
  }
};

export const getAllPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const post = await postModel.getAll();
    res.json(post);
  } catch (err) {
    next(err);
  }
};

export const insertPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const post = await postModel.insert(req.body);
    res.json({ ...post, password: "" });
  } catch (err:any) {
    console.log("Here catch err !")
    next(err);
  }
};

export const deletePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const post = await postModel.delete(+req.params.id);
    res.json(post);
  } catch (err) {
    next(err);
  }
};
