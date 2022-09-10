import { NextFunction, Request, Response } from 'express';

export function errorHandlerMiddleware(
  err: Error | any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(err);
  if (err.code) {
    return res.sendStatus(errorTypeToStatusCode(err.code));
  }

  return res.sendStatus(500);
}

function errorTypeToStatusCode(errorType: string) {
  if (errorType === 'conflict') return 409;
  if (errorType === 'not_found') return 404;
  if (errorType === 'unauthorized') return 401;

  return 400;
}
