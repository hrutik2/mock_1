const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    userName:String,
    password:String,
    email:String,
    avatar:String,

},{timestamps:true,
  v:false
})

const userModule=mongoose.model("user",userSchema)

module.exports={userModule}