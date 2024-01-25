import * as fs from "fs";
import path from "path";

import { TTodo, TCreateTodo, TUpdateTodo } from "./todo.type";
import { NotFoundError } from "../../utils/httpErrors";

const dataStorePath = path.join(__dirname, "./data-store.json");

const findTodos = () => {
  const todos = JSON.parse(fs.readFileSync(dataStorePath, "utf8"));

  return todos;
};

const findTodoById = (id: number) => {
  const todos = findTodos();
  const todo = todos.find((todo: TTodo) => todo.id === id);

  if (!todo) {
    throw new NotFoundError("Todo not found");
  }

  return todo;
};

const createTodo = (createTodo: TCreateTodo) => {
  try {
    const todos = JSON.parse(fs.readFileSync(dataStorePath, "utf8"));

    const newTodo = {
      id: Date.now(),
      task: createTodo.task,
    };

    todos.push(newTodo);

    fs.writeFileSync(dataStorePath, JSON.stringify(todos), "utf8");

    return newTodo;
  } catch (error) {
    throw error;
  }
};

const updateTodo = (id: number, updateTodo: TUpdateTodo) => {
  const todo = findTodoById(id);

  const todos = findTodos();
  const todoIndex = todos.findIndex((todo: TTodo) => todo.id === id);

  todo.task = updateTodo.task;
  todos[todoIndex] = todo;

  fs.writeFileSync(dataStorePath, JSON.stringify(todos), "utf8");

  return todo;
};

const deleteTodo = (id: number) => {
  const todo = findTodoById(id);

  const todos = findTodos();
  const todoIndex = todos.findIndex((todo: TTodo) => todo.id === id);

  todos.splice(todoIndex, 1);

  fs.writeFileSync(dataStorePath, JSON.stringify(todos), "utf8");

  return todo;
};

export const todoService = {
  find: findTodos,
  findById: findTodoById,
  create: createTodo,
  update: updateTodo,
  delete: deleteTodo,
};
