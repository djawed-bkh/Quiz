const routes = require('express').Router();
const mongoose = require('mongoose');
const {
  QuizSchema
} = require('../models/quizModel');

// declaration for pagination (because i am changings routes so i cant code simple pagination stuff)
// Ps : that was the only sollution that i have found
// so please if you have any suggestion dont hesitate
let score = 0;
let curPage=0;
let totPages=0;

routes.get('/:ID', async (req, res) => {



  const {
    page = 1, limit = 1
  } = req.query;
  try {

    const data = await QuizSchema.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();


    curPage=page;
    const Count = await QuizSchema.countDocuments();
    totPages=Math.ceil(Count, limit),
    
    res.render('Game', {
      data,
      totalPages: Math.ceil(Count, limit),
      currentPage: page
    })
  } catch (err) {
    console.log(err);
  }



});



routes.post('/:ID/play', async (req, res) => {
  const answer = await req.body.reponse;
  
   if(answer){
    score+=1;
    
     // on fais un patch
   }
   curPage+=1;
  res.redirect('http://localhost:3000/Quiz/Jeu/'+req.params.ID+'?page='+curPage+'&limit=2');

});






module.exports = routes;