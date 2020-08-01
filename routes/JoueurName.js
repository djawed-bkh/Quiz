const routes = require('express').Router();

const model =require('../models/quizModel');


const {validationPlayers} = require('../Validation')



routes.get('/',(req,res)=>{
   res.render('Joueur');

})


routes.post('/SubmitName',async (req,res)=>{
// validating data 
const {error}= await validationPlayers(req.body);
if(error) console.log(error.details[0].message);//return res.status(400).send(error.details[0].message);

console.log("tout marche");


})


module.exports=routes