const routes = require('express').Router();
const model =require('../models/quizModel');
const { Router } = require('express');





routes.post('/game',(req,res)=>{
    console.log("marche");
   res.render('Joueur');

})



module.exports=routes