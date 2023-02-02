const mongoose=require('mongoose');


var user1= new mongoose.Schema({
 
    name:{
        type:String,
    },
    address:{
        type:String,
       
    },
    email:{
        type:String,
        
    },
    phone:{
        type:Number
    },
    desc:{
        type:String
    }

});

const User=mongoose.model('users', user1); 
module.exports=User;
