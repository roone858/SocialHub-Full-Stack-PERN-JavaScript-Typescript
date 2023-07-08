import express from "express";
import { getUser,getAllUsers, insertUser, deleteUser } from "../controllers/users.controller";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUser);
router.post("/", insertUser);
router.delete("/:id", deleteUser);

export default router;
