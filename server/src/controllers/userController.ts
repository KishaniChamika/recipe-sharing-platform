import { Request, Response } from 'express';
import { User } from '../models/User';

export const register = async (req: Request, res: Response): Promise<void> => {
    const { username, email, password } = req.body;

    try {
        // Check if user already exists
        let user = await User.findOne({ email });

        if (user) {
            res.json({ message: "User Already exists" });
            return; 
        }

        // Create new user
        user = await User.create({ username, email, password });

        res.json({ message: "User Registered Successfully!" });
    } catch (error) {
        res.json({ message: error });
    }
};
