import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors';

const app=express();

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(bodyParser.json());

mongoose.connect(
    "mongodb+srv://adkishani:dbRecipeApp@cluster0.c8wjr.mongodb.net/RecipeApp?retryWrites=true&w=majority", {
    dbName: "RecipeApp",
    }
)
.then(() => console.log("MongoDB is Connected"))
.catch((err) => console.log(err.message));



const port=3006;

app.listen(port,()=>console.log(`server is running on port ${port}`))