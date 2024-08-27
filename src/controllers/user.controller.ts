import { Request, Response, NextFunction } from 'express';
import { asyncHandler } from '../utils/asyncHandler';

export const register = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { username } = req.body;
      res.status(200).json(username);
    } catch (error) {
      next(error);
    }
  }
);
