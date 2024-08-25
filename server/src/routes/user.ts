import express from 'express';
import { register } from '../controllers/userController';
import { Authenticate } from '../middlewear/auth';
const userRouter = express.Router();

userRouter.post('/register',register)

export default userRouter;