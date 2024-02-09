const express=require("express")
const cors=require("cors")
require("dotenv").config()
const { userRoutes } = require("./Routes/userRoutes")
const { feed } = require("./Routes/feedRoutes")
const { Connection } = require("./db")

const app=express()
app.use(cors())
app.use(express.json()) 
app.use("/api",userRoutes)
app.use("/api",feed)

app.listen(process.env.port,async()=>{
    try {
        await Connection
        console.log(`Database running on port ${process.env.port}`)
    } catch (error) {
        console.log(error)
    }
})

