import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String,requires: true},
    email: {type: String,required: true,unique: true},
    password: {type: String,required: true},
    city: {type: String,required : true},
  });

 export const UserModel = mongoose.model("users",userSchema);