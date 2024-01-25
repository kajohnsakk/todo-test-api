import { Request, Response, NextFunction } from "express";

import { todoService } from "./todo.service";

export const getTodoList = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const todoList = todoService.find();

    res.status(200).send({
      data: todoList,
    });
  } catch (error) {
    next(error);
  }
};

export const findTodoById = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const todo = todoService.findById(Number(req.params.id));

    res.status(200).send({
      data: todo,
    });
  } catch (error) {
    next(error);
  }
};

export const createTodo = (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = todoService.create(req.body);

    res.status(201).send({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const updateTodo = (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = todoService.update(Number(req.params.id), req.body);

    res.status(200).send({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteTodo = (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = todoService.delete(Number(req.params.id));

    res.status(200).send({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
