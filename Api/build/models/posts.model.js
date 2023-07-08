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
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
class PostsModel {
    getOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.client.connect();
            try {
                const result = yield conn.query("SELECT * FROM posts where post_id=$1 ;", [id]);
                return result.rows[0];
            }
            finally {
                conn.release();
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.client.connect();
            try {
                const result = yield conn.query("SELECT * FROM posts ;");
                return result.rows;
            }
            finally {
                conn.release();
            }
        });
    }
    insert(post) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.client.connect();
            try {
                const result = yield conn.query("INSERT INTO posts ( content, created_at, user_id) VALUES ($1, $2, $3) RETURNING *  ;", [post.content, post.created_at, post.user_id]);
                return result.rows[0];
            }
            finally {
                conn.release();
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.client.connect();
            try {
                const result = yield conn.query("DELETE FROM posts WHERE post_id=$1 RETURNING * ;", [id]);
                return result.rows[0];
            }
            finally {
                conn.release();
            }
        });
    }
}
exports.default = PostsModel;
