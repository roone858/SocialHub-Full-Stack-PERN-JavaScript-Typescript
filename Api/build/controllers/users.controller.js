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
exports.deleteUser = exports.insertUser = exports.getAllUsers = exports.getUser = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const userModel = new user_model_1.default();
const getUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userModel.getOneById(+req.params.id);
        res.json(user);
    }
    catch (err) {
        next(err);
    }
});
exports.getUser = getUser;
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userModel.getAll();
        res.json(user);
    }
    catch (err) {
        next(err);
    }
});
exports.getAllUsers = getAllUsers;
const insertUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userModel.insert(req.body);
        res.json(Object.assign(Object.assign({}, user), { password: "" }));
    }
    catch (err) {
        next(err);
    }
});
exports.insertUser = insertUser;
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userModel.delete(+req.params.id);
        res.json(user);
    }
    catch (err) {
        next(err);
    }
});
exports.deleteUser = deleteUser;
