import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {userRouter} from "./routes/Users.js"
import {tblogRouter} from './routes/Tblogs.js'

const app = express();

app.use(express.json());
app.use(cors());
app.use("/auth",userRouter);
app.use("/tblogs", tblogRouter);


mongoose.connect("mongodb://127.0.0.1:27017/TBlog").then(() => console.log("DATABASE CONNECTED!!"));
app.listen(5000,() => console.log("SERVER RUNNING!!"));


