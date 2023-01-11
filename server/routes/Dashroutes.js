import {Router} from "express";
import  {createPost , getPost , deletePost , editPost }  from  "../controller/DashboardControl.js";

const dashrouter = new Router();

dashrouter.post("/add-todo",createPost);
dashrouter.get("/add-todo",getPost);
dashrouter.delete("/add-todo",deletePost);
dashrouter.put("/edit-todo",editPost);


export default dashrouter;