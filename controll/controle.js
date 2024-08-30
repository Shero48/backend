const express=require('express');
const app=express();
const User=require('../model/user')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')

const signup=async(req,res)=>{
try{
    const {name,password,email}=req.body;
    console.log(req.body);
    
    const emai=await User.findOne({email:email});
    if(emai){
      res.status(500).json(
          {
              message:"your email is already exiting"
          }
      )
    }
  
  
  const hashpass=await bcrypt.hashSync(password,10)
  console.log("hashed pass ",hashpass);
  
  const data=await User.create({
    name:name,
    password:hashpass,
    email:email,
  });
  res.status(201).json({
    data,
   message: "data is craeted"
  })}
  catch(err){
    res.status(500).json(
      {
          message:"your email is already exiting",
          err:err.message
      }
  )
  }
};
const find=async(req,res)=>{
  try{
     const data=await User.find({})
     if(!data){
      res.status(500).json(
        {
            message:"your email is already exiting",
            err:err.message
        })
     }
     res.status(500).json(
      {
        data  
      })
  }
  catch(err){
    res.status(500).json(
      {
          message:"your email is already exiting",
          err:err.message
      })
  }
}

const login=async(req,res)=>{
    try{
    const {email,password}=req.body;
    console.log(req.body);
    
    const data=await User.findOne({email:email})
    if(!data){
        res.status(500).json(
            {
                message:"your email is already exiting"
            }
        )
    }
    const id=await bcrypt.compare(password,data.password)
    if(id){
        const token=jwt.sign(data.email,process.env.jsontoken);
        console.log(token);
        res.status(201).json({
            data,
            token
          })
    }
}
catch(err){
  console.log(err);
  res.status(500).json(
    {
        message:"your email is already exiting",
        err:err.message
    }
)
  
}
}

module.exports={signup,login,find}