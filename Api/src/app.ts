import express from "express";
import cors from "cors";
import favicon from "serve-favicon";
import path from "path";
import usersRoutes from "./routes/usersRoutes";
import postsRoutes from "./routes/postsRoutes";
import  ErrorHandler  from "./middlewares/errHandling";
const app = express();
const port = process.env.PORT || 4000
app.use(cors());
app.use(express.json());
app.use(favicon(path.join(__dirname, "../public", "favicon.ico")));

app.use(express.static(path.join(__dirname, "../public")));

app.use("/users", usersRoutes);
app.use("/posts", postsRoutes);
app.get("/", (req, res) => {
  res.json({ message: "✅" });
});
app.use(ErrorHandler);

app.listen(port, () => {
  console.log("server running in port : "+ port);
});
