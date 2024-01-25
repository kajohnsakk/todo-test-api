import { Request, Response, NextFunction } from "express";
import { z, AnyZodObject } from "zod";

import { ValidationError } from "../utils/httpErrors";

const validateMiddleware =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      return next();
    } catch (error) {
      next(new ValidationError(error.issues));
    }
  };

export { z, validateMiddleware };
