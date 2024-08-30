const express=require('express');
const app=express();
require('dotenv').config();
const connectdata=require('./db/db');
app.use(express.json());
const router=require('./router/route')

console.log(process.env.port);

//  app.get('/',(req,res)=>{
//     res.send("hiii")
//  })
 app.use('/api',router)
app.listen(process.env.port,()=>{
    console.log(`server is runing on ${process.env.port}`);
    connectdata();
})