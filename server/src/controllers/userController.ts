import { Request, Response } from 'express';
import { User } from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req: Request, res: Response): Promise<void> => {
    const { username, email, password } = req.body;

    try {
        // Check if user already exists
        let user = await User.findOne({ email });

        if (user) {
            res.status(400).json({ message: "User already exists" });
            return; 
        }

        // Hash password before saving
        const hashPass = await bcrypt.hash(password, 10);

        // Create new user
        user = await User.create({ username, email, password: hashPass });

        res.status(201).json({ message: "User registered successfully!" });
    } catch (error:any) {
        console.error("Registration error:", error); // Log the error for debugging
        res.status(500).json({ message: error.message || 'An error occurred during registration.' });
    }
};
