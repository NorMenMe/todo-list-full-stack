import Todos from "../models/Todo.js";
import createError from "http-errors";

export const createTodo = async (req, res, next) => {
  try {
    const todo = req.body;
    console.log(todo);

    const newTodo = await Todos.create(todo);

    res.json(newTodo);
  } catch (error) {
    next(error);
  }
};

export const getAllTodos = async (req, res, next) => {
  try {
    const allTodos = await Todos.find();

    res.json(allTodos);
  } catch (error) {
    next(error);
  }
};

export const updateTodo = async (req, res, next) => {
  try {
    const { id } = req.params;

    const todo = req.body;

    const updatedTodo = await Todos.findByIdAndUpdate(id, todo, { new: true });
    if (!updateTodo) throw createError(404, `no todo under id : ${id}`);
    res.json(`Todo with id:${id} was updated`);
  } catch (error) {
    next(error);
  }
};

export const deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedTodo = await Todos.findByIdAndDelete(id);
    if (!updateTodo) throw createError(404, `no todo under id : ${id}`);
    res.json(`Todo with id:${id} was deleted`);
  } catch (error) {
    next(error);
  }
};
