const routes = require('express').Router();
const mongoose = require('mongoose');
const {
  QuizSchema
} = require('../models/quizModel');



routes.get('/:ID', async (req, res) => {

  const data = await QuizSchema.find();
  for (let index = 0; index < data.length; index++) {
    res.render('Game', {
      questions: data[index]
    });
  }

});



routes.post('/play', (req, res) => {




})






module.exports = routes;