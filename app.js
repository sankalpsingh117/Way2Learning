const express= require("express");
const app=express();
const path = require("path");
const ejs = require('ejs');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"./frontend"))
app.use(express.urlencoded({extended:false}))
app.get("/",(req,res)=>{

res.render("index");
});

app.get("/contact",(req,res)=>{
    res.render("contact");
    });
    


app.listen(5500);



