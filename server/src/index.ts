import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors';
import userRouter from "./routes/user";
import recipeRoutes from './routes/recipeRouter';
const app=express();

app.use(cors());

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api',userRouter);
app.use('/uploads', express.static('uploads'));
app.use('/api', recipeRoutes);

mongoose.connect(
    "mongodb+srv://adkishani:dbRecipeApp@cluster0.c8wjr.mongodb.net/RecipeApp?retryWrites=true&w=majority",{
        dbName:"RecipeApp",
        
    }
)
.then(() => console.log("MongoDB is Connected"))
.catch((err) => console.log(err.message));



const port=3000;

app.listen(port,'0.0.0.0',()=>console.log(`server is running on port ${port}`))