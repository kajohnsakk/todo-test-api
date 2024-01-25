import express, { Express, Request, Response, NextFunction } from "express";

import todoApi from "./api/todo";
import { ApplicationError, InternalServerError } from "./utils/httpErrors";

const PORT = 3000;

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

todoApi(app);

app.use(
  (
    error: ApplicationError | Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    if (error instanceof ApplicationError) {
      return res.status(error.status).json(error);
    }

    res.status(500).json(new InternalServerError(error.message).toJSON());
  }
);

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});
