const mongoose=require('mongoose');


var users= new mongoose.Schema({
 
    name:{
        type:String,
    },
    email:{
        type:String,
       
    },
    mobile:{
        type:Number,
        
    },
    address:{
        type:String
    },
    msg:{
        type:String
    }

});

const User=mongoose.model('users', users); 
module.exports=User;