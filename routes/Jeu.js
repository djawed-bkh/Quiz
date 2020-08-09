const routes = require('express').Router();
const mongoose = require('mongoose');
const { QuizSchema } = require('../models/quizModel');



routes.get('/', async (req,res)=>{ 
  //console.log(await QuizSchema.find() );
  const data = await QuizSchema.find();
  console.log(data.toObject()  );
  res.render('Game',{questions : data});
  
  //const data = await QuizSchema.create({"enonce":"Quel est la capitale de la belgioque ?","proposition":[{"proposition":"Paris","sollution":"true"},{"proposition":"Londre","sollution":"false"},{"proposition":"ALger","sollution":"false"},{"proposition":"Nedroma","sollution":"false"}]})
});



routes.post('/play',(req,res)=>{    
  



})






module.exports=routes;