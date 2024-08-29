import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    firstname: { type: String },
    lastname: { type: String },
    bio: { type: String },
    avatar: { type: String },
    
});
export const User = mongoose.model("User",UserSchema);
