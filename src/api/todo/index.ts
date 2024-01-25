import { Express } from "express";

import {
  getTodoList,
  findTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
} from "./todo.api";
import { validateMiddleware } from "../../middlewares/validate.middleware";
import {
  findTodoByIdSchema,
  createTodoSchema,
  updateTodoSchema,
  deleteTodoSchema,
} from "./todo.schema";

export default (app: Express) => {
  app.get("/todos", getTodoList);
  app.get("/todos/:id", validateMiddleware(findTodoByIdSchema), findTodoById);
  app.post("/todos", validateMiddleware(createTodoSchema), createTodo);
  app.put("/todos/:id", validateMiddleware(updateTodoSchema), updateTodo);
  app.delete("/todos/:id", validateMiddleware(deleteTodoSchema), deleteTodo);
};
