import { NextFunction, Request, Response } from "express";
import { AppError } from "../../../error/AppError";

export default (err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    console.log(err)
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }

  return response.status(500).json({
    status: "Error",
    message: `Internal server Error - ${err.message}`,
  });
};
