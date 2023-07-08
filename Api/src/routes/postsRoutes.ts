import express from "express";
import {
  getPost,
  getAllPosts,
  insertPost,
  deletePost,
} from "../controllers/posts.controller";


const router = express.Router();

router.get("/", getAllPosts);
router.get("/:id", getPost);
router.post("/", insertPost);
router.delete("/:id", deletePost);

export default router;
