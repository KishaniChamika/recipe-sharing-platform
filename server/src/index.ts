import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors';
import userRouter from "./routes/user";

const app=express();

app.use(cors({
    origin: 'http://localhost:3001', // Your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());
app.use(express.json());
app.use('/api',userRouter);

mongoose.connect(
    "mongodb+srv://adkishani:dbRecipeApp@cluster0.c8wjr.mongodb.net/RecipeApp?retryWrites=true&w=majority",{
        dbName:"RecipeApp",
        
    }
)
.then(() => console.log("MongoDB is Connected"))
.catch((err) => console.log(err.message));



const port=3000;

app.listen(port,()=>console.log(`server is running on port ${port}`))