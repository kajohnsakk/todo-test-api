export class ApplicationError extends Error {
  readonly status: number;
  readonly details: object;
  readonly code: number;

  constructor(
    message: string,
    status: number,
    details?: object,
    code?: number
  ) {
    if (typeof message !== "string") {
      throw new TypeError("Error message must be a non-empty string");
    }

    if (typeof status !== "number") {
      throw new TypeError("Error status must be a number");
    }

    super(message);

    Error.captureStackTrace(this, this.constructor);

    this.status = status;
    this.details = details;
  }

  toJSON() {
    return {
      status: this.status,
      code: this.code,
      name: this.name,
      message: this.message,
      ...(this.details && { details: this.details }),
    };
  }
}

export class BadRequestError extends ApplicationError {
  constructor(message: string, details?: object, code?: number) {
    super(message, 400, details, code);

    this.name = "BadRequest";
  }
}

export class ValidationError extends BadRequestError {
  constructor(details?: object, code?: number) {
    super("ValidationError", details, code);
  }
}

export class UnauthorizedError extends ApplicationError {
  constructor(message: string, code?: number) {
    super(message, 401, null, code);

    this.name = "Unauthorized";
  }
}

export class ForbiddenError extends ApplicationError {
  constructor(message: string) {
    super(message, 403);

    this.name = "Forbidden";
  }
}

export class NotFoundError extends ApplicationError {
  constructor(message: string) {
    super(message, 404);

    this.name = "NotFound";
  }
}

export class InternalServerError extends ApplicationError {
  constructor(message: string, details?: object, code?: number) {
    super(message, 500, details, code);

    this.name = "InternalServerError";
  }
}

export class ApiError extends ApplicationError {
  constructor(message: string, status: number, details?: object) {
    super(message, status, details);
  }
}
