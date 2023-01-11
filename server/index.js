import express from "express";
import dotEnv from"dotenv";
import cookieparser from "cookie-parser";
import cors from"cors";

import loginrouter from "./routes/Userroutes.js";
import Dashroutes from "./routes/Dashroutes.js";

import errorHandler from "./middlewares/errors.js";

import connectDB from"./connection/mongoose.js";
dotEnv.config({ path: "./config/config.env" });
connectDB();
const App = express();

App.use(cors({
    origin : ["http://localhost:3000"],
    methods:["GET, POST, PUT, DELETE"],
    credentials:true,
}));
App.use(express.urlencoded({extended:false}));
App.use(express.json());
App.use(cookieparser());

//routes
App.use("/users",loginrouter);
App.use("/",Dashroutes);

App.use(errorHandler)

App.listen(5000,console.log("server is running"));