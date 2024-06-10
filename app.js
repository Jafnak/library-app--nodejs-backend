const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const book=require("./models/book") 

const app=express()
app.use(cors())

app.get("/",(req,res)=>
{
    res.send("Hello")
})

app.post("/add",(req,res)=>{
    res.send("Welcome")
})

app.listen(8080,()=>
{
    console.log("Server started")
})

