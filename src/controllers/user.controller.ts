import { Request, Response, NextFunction } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { APIResponse } from '../utils/APIResponse';

export const register = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { username } = req.body;
      res
        .status(201)
        .json(new APIResponse(201, username, 'Register Successfully'));
    } catch (error) {
      next(error);
    }
  }
);
