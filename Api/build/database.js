"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const pg_pool_1 = __importDefault(require("pg-pool"));
// by default the pool uses the same
// configuration as whatever `pg` version you have installed
exports.client = new pg_pool_1.default({
    database: "socialhub",
    user: "postgres",
    password: "1234",
    port: 5432,
    //   ssl: true,
    //   max: 20, // set pool max size to 20
    //   idleTimeoutMillis: 1000, // close idle clients after 1 second
    //   connectionTimeoutMillis: 1000, // return an error after 1 second if connection could not be established
    //   maxUses: 7500, // close (and replace) a connection after it has been used 7500 times (see below for discussion)
});
