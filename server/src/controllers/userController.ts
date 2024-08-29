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

export const login =async(req: Request, res: Response)=>{
    const {email,password} =req.body

    try{
        let user = await User.findOne({email});
        //console.log("User is coming from login",user)

        if(!user) return res.json({message:"User not exist..!"})
        const validPass = await bcrypt.compare(password,user.password)
        if (!validPass) return res.json({message:"Invalid credentials"});

        const token = jwt.sign({userId:user._id},"!@#$%^&*()",{
            expiresIn:'1d'
        })

        res.json({message:`Welcome ${user.username}`,token})
    }catch(error){
        res.json({message:error})
    }

};

export const profile = async (req: Request, res: Response) => {
    try {
        res.status(200).json({ user: req.user });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

export const updateProfile = async (req: Request, res: Response) => {
    try {
        const { firstname, lastname, bio } = req.body;
        let avatar = req.user.avatar;

        if (req.file) {
            avatar = req.file.path;
        }

        const updatedUser = await User.findByIdAndUpdate(req.user._id, {
            firstname,
            lastname,
            bio,
            avatar
        }, { new: true });

        res.json({ message: "Profile updated successfully", user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: "Error updating profile", error });
    }
};
