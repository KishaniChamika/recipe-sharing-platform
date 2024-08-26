import express from 'express';
import { register,login,profile,updateProfile } from '../controllers/userController';
import { Authenticate } from '../middlewear/auth';
import multer from 'multer';

const userRouter = express.Router();

const upload = multer({ dest: 'uploads/avatars' });
userRouter.post('/register',register);
userRouter.post('/login', login);

userRouter.get('/user', Authenticate, profile);
userRouter.put('/user', Authenticate, upload.single('avatar'), updateProfile); 

export default userRouter;