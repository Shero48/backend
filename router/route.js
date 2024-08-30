const express=require('express');
const app=express();
const {signup,login,find}=require('../controll/controle');
const router=express.Router();
router.post('/signup',signup)
router.post('/login',login)
router.get('/find',find)

module.exports=router