const express= require("express");
const app=express();
const path = require("path");
const ejs = require('ejs');
const user = require('./models/user')
require("./models/db")

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"./frontend"))
app.use(express.urlencoded({extended:false}))
app.get("/",(req,res)=>{

res.render("index");
});

app.get("/contact",(req,res)=>{
    res.render("contact");
    });

app.post("/",(req,res)=>{
    InsertRecord(req,res);
   })  

function InsertRecord(req,res){
 var user2=new user(req.body);

 user2.save((err,doc)=>{
    if(!err){
        
        res.redirect('./');
    }else{
        res.status(500).throw(error);
    }
 })}
    


app.listen(5500);
