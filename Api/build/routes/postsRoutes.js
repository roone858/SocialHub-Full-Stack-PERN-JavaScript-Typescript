"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const posts_controller_1 = require("../controllers/posts.controller");
const errHandling_1 = require("../middlewares/errHandling");
const router = express_1.default.Router();
router.get("/", posts_controller_1.getAllPosts);
router.get("/:id", posts_controller_1.getPost);
router.post("/", posts_controller_1.insertPost);
router.delete("/:id", posts_controller_1.deletePost);
router.use(errHandling_1.errorHandling);
exports.default = router;
