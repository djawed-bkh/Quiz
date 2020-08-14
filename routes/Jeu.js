const routes = require('express').Router();
const mongoose = require('mongoose');
const {
  QuizSchema
} = require('../models/quizModel');



routes.get('/:ID', async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    
    const data = await QuizSchema.find()
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .exec();



    const Count = await  QuizSchema.countDocuments();
        res.render('Game',{
      data,
      totalPages: Math.ceil(Count,limit),
      currentPage : page
    })

     /*res.render('Game', {
      questions: results,
      pageCount,
      itemCount,
      pages: paginate.getArrayPages(req)(1, pageCount, req.query.page)
    });*/


  } catch (err) {
    console.log(err);
  }


});



routes.post('/play', (req, res) => {




})






module.exports = routes;