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
class UsersModel {
    getOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.client.connect();
            try {
                const result = yield conn.query("SELECT * FROM users where user_id=$1 ;", [id]);
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
                const result = yield conn.query("SELECT * FROM users ;");
                return result.rows;
            }
            finally {
                conn.release();
            }
        });
    }
    insert(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.client.connect();
            try {
                const result = yield conn.query("INSERT INTO users (name, username, email, bio, password) VALUES ($1, $2, $3, $4, $5) RETURNING *  ;", [user.name, user.username, user.email, user.bio, user.password]);
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
                const result = yield conn.query("DELETE FROM users WHERE user_id=$1 RETURNING * ;", [id]);
                return result.rows[0];
            }
            finally {
                conn.release();
            }
        });
    }
}
exports.default = UsersModel;
