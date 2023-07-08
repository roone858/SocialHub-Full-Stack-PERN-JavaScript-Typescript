"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandling = void 0;
const errorHandling = (err, req, res) => {
    console.log("middleware error handling");
    res.status(500).json({ error: 'Internal Server Error' });
};
exports.errorHandling = errorHandling;
