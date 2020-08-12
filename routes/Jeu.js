const routes = require('express').Router();
const mongoose = require('mongoose');
const { QuizSchema } = require('../models/quizModel');



routes.get('/:ID', async (req,res)=>{ 
  
  const data = await QuizSchema.find();
  
  res.render('Game',{questions : data});
});



routes.post('/play',(req,res)=>{    
  



})






module.exports=routes;