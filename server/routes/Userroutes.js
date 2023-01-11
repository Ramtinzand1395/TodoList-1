import {Router} from "express";
import  {createUser  , handleLogin}  from  "../controller/Usercontrol.js";
import { authenticated } from "../middlewares/authenticated.js";

const loginrouter = new Router();

loginrouter.post("/register",createUser);

loginrouter.post("/login", handleLogin);
loginrouter.post("/todo", authenticated );

//router.get("/register",Getuser);



export default loginrouter;