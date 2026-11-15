import { HttpError } from 'http-errors';

export const errorHandler = (error, _req, res, _next) => {
  if (error instanceof HttpError) {
    res.status(error.status).json({ message: error.message });
    return;
  }

  res.status(500).json({ message: 'Internal Server Error' });
};
