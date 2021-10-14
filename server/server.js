import "./connect/db-connect.js";
import express from "express";
import cors from "cors";
import routerUsers from "../server/router/usersRouter.js";
import routerTodos from "./router/todosRouter.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  console.log("hello world");

  res.send("hello world");
});

app.use("/users", routerUsers);
app.use("/todos", routerTodos);

const PORT = "5000";
app.listen(PORT, () => {
  console.log("api initalized at port http://localhost:5000");
});

app.use(function errorHandler(err, req, res, next) {
  res.status(err.status || 400).send({
    error: {
      message: err.message,
      status: err.status,
    },
  });
});
