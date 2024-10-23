import { Request, Response, NextFunction, RequestHandler } from 'express';

/**
 * A utility to handle async routes and pass errors to next middleware.
 */
const asyncHandler = (requestHandler: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    Promise.resolve(requestHandler(req, res, next)).catch(next);
  };
};

export default asyncHandler;
