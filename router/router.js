const express=require("express")
const { addfilm } = require("../controller/films")
const movierouter=express.Router()
movierouter.post("/add",addfilm)
module.exports=movierouter