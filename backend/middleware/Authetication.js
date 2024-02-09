require("dotenv").config()

const jwt = require('jsonwebtoken');
const Athentication=(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1]
    try {
        jwt.verify(token, process.env.key, (err, decoded)=> {
            if(err){
                res.send({"message":"Invalid Token"})
            }
            else{
                console.log(decoded.user_id)
                req.user_id=decoded.user_id
                next()
            }
          })
       
        
    } catch (error) {
       console.log(error) 
    }
}
module.exports={Athentication}