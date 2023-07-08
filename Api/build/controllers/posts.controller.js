"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.insertPost = exports.getAllPosts = exports.getPost = void 0;
const posts_model_1 = __importDefault(require("../models/posts.model"));
const postModel = new posts_model_1.default();
const getPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield postModel.getOneById(+req.params.id);
        res.json(post);
    }
    catch (err) {
        next(err);
    }
});
exports.getPost = getPost;
const getAllPosts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield postModel.getAll();
        res.json(post);
    }
    catch (err) {
        next(err);
    }
});
exports.getAllPosts = getAllPosts;
const insertPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield postModel.insert(req.body);
        res.json(Object.assign(Object.assign({}, post), { password: "" }));
    }
    catch (err) {
        console.log("Here catch err !");
        next(err);
    }
});
exports.insertPost = insertPost;
const deletePost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield postModel.delete(+req.params.id);
        res.json(post);
    }
    catch (err) {
        next(err);
    }
});
exports.deletePost = deletePost;
