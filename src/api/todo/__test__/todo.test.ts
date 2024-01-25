import { todoService } from "../todo.service";
import { TTodo } from "../todo.type";

describe("Todo Service Tests", () => {
  let createdTodo: TTodo;

  it("should create a new todo in the data store", () => {
    const newTodoData = {
      task: `Task-${Date.now()}`,
    };

    const result = todoService.create(newTodoData);

    expect(result.task).toBe(newTodoData.task);

    createdTodo = result;
  });

  it("should update a todo by id in the data store", () => {
    const updateTodoData = {
      task: `Updated-Task-${Date.now()}`,
    };

    const result = todoService.update(createdTodo.id, updateTodoData);

    expect(result.task).toBe(updateTodoData.task);

    createdTodo = result;
  });

  it("should find a todo by id", () => {
    const result = todoService.findById(createdTodo.id);

    expect(result).toEqual(createdTodo);
  });

  it("should throw an error if todo is not found", () => {
    expect(() => todoService.findById(Date.now())).toThrow("Todo not found");
  });

  it("should delete a todo by id", () => {
    const result = todoService.delete(createdTodo.id);
    expect(result).toEqual(createdTodo);
  });
});
