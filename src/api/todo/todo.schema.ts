import { z } from "zod";

export const findTodoByIdSchema = z.object({
  params: z.strictObject({
    id: z.string(),
  }),
});

export const createTodoSchema = z.object({
  body: z.strictObject({
    task: z.string(),
  }),
});

export const updateTodoSchema = z.object({
  params: z.strictObject({
    id: z.string(),
  }),
  body: z.strictObject({
    task: z.string().optional(),
  }),
});

export const deleteTodoSchema = z.object({
  params: z.strictObject({
    id: z.string(),
  }),
});
