import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'

const errors: Record<string, number> = {
  BadRequest: 400,
  UnauthorizedError: 401,
  NotFound: 404,
  ConflitError: 409
}

export const errorMiddleware = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const { name, message } = err
  const status = errors[name]
  if (status) {
    return res.status(status).json({ message })
  }
  if (err instanceof Joi.ValidationError) {
    return res.status(400).json({ message: err.message })
  }
  res.sendStatus(500)
}
