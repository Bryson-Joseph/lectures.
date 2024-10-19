import { NextFunction, Request, Response } from 'express';
import { NestMiddleware } from '@nestjs/common';

export function jwtMiddleware(req: Request, res: Response, next: NextFunction) {
  console.log(req.headers);
  next();
}
