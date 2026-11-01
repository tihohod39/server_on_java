import 'dotenv/config';
const express = require("express");
const app = express();
const port=process.env.PORT;

app.use((req,res,next)=>{
    const isallowed= false;
    if(!isallowed){
        return res.status(403).send("Access denied");

    }

    next();
});
app.get("/",(req,res)=>{
    res.send("Welcome");
});
app.use((req,res,next)=>{
    console.log("1.Request recived");
    next();
});

app.use((req,res,next)=>{
    console.log("2.Checking the request");
    next();
});

app.use((req,res,next)=>{
    console.log(req.method, req.url);
    next();
});

app.get("/",(req,res)=>{
    console.log("3.Answer sent");
    res.send("Hello!");
});



app.get("/",(req,res)=> {
    res.send("Main page");
});
app.get("/products",(req,res)=> {
    res.send("Products page")
});

app.get("/products",(req,res)=> {
    res.send("Get products");
});

app.post("/products",(req,res)=> {
    res.send("Create product");
});

app.delete("/products",(req,res)=> {
    res.send("Delete product");
});

app.get("/about",(req,res)=> {
    res.send("Information about company");
});

app.get("/user",(req,res)=> {
    res.json({
        id : 1,
        name :"Anna",
        role:"student"
    });
});
express.json();
app.listen(3000);
