const routes = require('express').Router();
const mongoose = require('mongoose');
const model =require('../models/quizModel')



routes.get('/',(req,res)=>{    
  res.render('Game')
})



routes.post('/',(req,res)=>{    
  
})






module.exports=routes;