import { User } from "../models/User";
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export const Authenticate = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization")?.replace('Bearer ', '');

  try {
    if (!token) return res.json({ message: "login first" });

    const decode = jwt.verify(token, "!@#$%^&*()") as jwt.JwtPayload;

    //console.log("this is decoded data", decode);
    const id = decode.userId;

    let user = await User.findById(id);
    if (!user) return res.json({ message: "User not exist" });

    req.user = user;
    next();
  } catch (error) {
    res.json({ message: error});
  }
};