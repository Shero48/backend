const { type } = require('express/lib/response');
const mongoose=require('mongoose');
const schema=mongoose.Schema;
const user=new schema({
    name:{
        type:String,
        requireed:true
    },
    password:{
        type:String,
        requireed:true,
    },
    email:{
        type:String,
        required:true
    },
    image:{
        type:String
    }
},{timestamps:true})

const User=mongoose.model('user',user);
module.exports=User;