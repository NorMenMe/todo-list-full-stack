import express from "express";
import {
  getUser,
  getAllUsers,
  getUserTodos,
  login,
  logout,
  register,
  authUser,
} from "../controllers/usersControllers.js";

import auth from "../middleware/auth.js";
import isAdmin from "../middleware/isAdmin.js";
import {
  userValidationRules,
  userValidationErrorHandling,
} from "../validation/userValidation.js";

const routerUsers = express.Router();

routerUsers.route("/").get(auth, isAdmin, getAllUsers); //auth, isAdmin,
routerUsers.route("/login").post(login);
routerUsers.route("/logout").post(logout);
routerUsers.route("/auth").post(auth, authUser);
routerUsers.route("/register").post(register); // insert again userValidationRules(), userValidationErrorHandling
routerUsers.route("/:id").get(auth, getUser);
routerUsers.route("/:id/todos").get(auth, getUserTodos);

export default routerUsers;
