const express=require("express")
require("dotenv").config()
const bcrypt=require("bcrypt")
const jwt = require('jsonwebtoken');
const { userModule } = require("../module/usermodules");


const userRoutes=express.Router()

userRoutes.post("/register",async(req,res)=>{
    const { userName,avatar ,email, password }=req.body
    try {
      
        const hash= await bcrypt.hash(password,4)
        const user=await userModule.findOne({email})
        if(user){
            res.status(400).send({"message":"user already existed"})
        }
        else{
            const newUser =new userModule ({  userName, avatar, email, password:hash})
            await newUser.save()
            res.status(201).send({"message":"new user Register successfully"})
        }
        
    } catch (error) {

        res.send(error)
    }
})
userRoutes.post("/login",async(req,res)=>{
    const { email, password } = req.body;
    
    try {
        const user=await userModule.findOne({email})
        console.log(user._id)
        if(user){
            const validPassword = await  bcrypt.compare(password,user.password)
            if (!validPassword) {
                res.status(400).send({ "message": "Email or Password is incorrect"})
            }
            else{
               const token= jwt.sign({"user_id":user._id},process.env.key)
               res.status(201).send({"message":"login successfully" ,"token":token})
            }
        }
    } catch (error) {
        res.send(error)
    }
})

module.exports={userRoutes}