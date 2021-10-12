import express from "express";
import {
  createTodo,
  getAllTodos,
  updateTodo,
  deleteTodo,
} from "../controllers/todosControllers.js";
import auth from '../middleware/auth.js'
import isAdmin from '../middleware/isAdmin.js'

const routerTodos = express.Router();

routerTodos.route("/").get(auth, isAdmin, getAllTodos).post(auth, createTodo);

routerTodos.route("/:id").put(auth, updateTodo).delete(auth, deleteTodo);

export default routerTodos;
