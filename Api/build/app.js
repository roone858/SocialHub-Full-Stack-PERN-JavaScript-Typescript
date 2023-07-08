"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const serve_favicon_1 = __importDefault(require("serve-favicon"));
const path_1 = __importDefault(require("path"));
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
const postsRoutes_1 = __importDefault(require("./routes/postsRoutes"));
const errHandling_1 = require("./middlewares/errHandling");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, serve_favicon_1.default)(path_1.default.join(__dirname, "../public", "favicon.ico")));
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
app.use("/users", usersRoutes_1.default);
app.use("/posts", postsRoutes_1.default);
app.use(errHandling_1.errorHandling);
app.get("/", (req, res) => {
    res.json({ message: "✅" });
});
app.listen(3000, () => {
    console.log("server running in port : 3000 ");
});
