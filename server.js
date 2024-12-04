const express=require("express")
const config = require("./configuration/config")
const movierouter = require("./router/router")
const app=express()
const port=6000
app.use(express.json())
app.use("/",movierouter)
app.listen(port,console.log("sever is running"))
config()
