import express from "express";


const app=express()


app.get("/",(req,res)=>{
    res.send("server is running")
})

app.get("/api/product",(req,res)=>{
    const product=[{id:1,title:"title1"},{id:2,title:"title2"},{id:3,title:"title3"}]
    res.send(product)
})

const port=8080;


app.listen(port,()=>{
    console.log(`server is running on${port} `)
})