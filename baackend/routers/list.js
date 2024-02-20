const router= require("express").Router();
const User=require("../modles/user");
const List= require("../models/list");

router.post("/addTask",async(req,res)=>
{
    const{title,body,email}=res.body;
})