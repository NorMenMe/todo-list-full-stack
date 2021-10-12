import express from "express";
import {
  createTodo,
  getAllTodos,
  updateTodo,
  deleteTodo,
} from "../controllers/todosControllers.js";
import auth from '../middleware/auth.js'
import isAdmin from '../middleware/isAdmin.js'
import {userValidationRules, userValidationErrorHandling } from '../validation/userValidation.js'

const routerTodos = express.Router();

routerTodos.route("/").get(auth, isAdmin, getAllTodos).post(auth, userValidationRules(), userValidationErrorHandling,  createTodo);

routerTodos.route("/:id").put(auth, updateTodo).delete(auth, deleteTodo);

export default routerTodos;
