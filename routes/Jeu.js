const routes = require('express').Router();
const mongoose = require('mongoose');
const { QuizSchema } = require('../models/quizModel');



routes.get('/', async (req,res)=>{ 
  
  const data = await QuizSchema.find();
  //console.log(data[0].proposition[0].proposition)
  res.render('Game',{questions : data});
});



routes.post('/play',(req,res)=>{    
  



})






module.exports=routes;