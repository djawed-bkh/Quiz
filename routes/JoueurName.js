const routes = require('express').Router();

const {
   validationPlayers
} = require('../Validation');
const {
   JoueursSchema
} = require('../models/quizModel');



routes.get('/', async (req, res) => {
   const rank = await JoueursSchema.find().sort('-Score').limit(2);

   res.render('Joueur', {
      Score: rank
   });

})



routes.post('/SubmitName', async (req, res) => {

   // validating data 
   const {
      error
   } = await validationPlayers(req.body);
   if (error) return res.status(400).send(error.details[0].message);





   // Adding data into the database

   const Player = new JoueursSchema({
      prenom: req.body.prenom,
      Age: req.body.Age,
      Score: 0
   });
   Player
      .save()
      .then(result => {
         console.log(result)
         res.status(200).redirect('/Quiz/Jeu/' + Player._id);
      })
      .catch(error => {
         console.log(error)
         res.json({
            state: false,
            msg: "Data inserting Unsuccessfull..!"
         });
      })






})


module.exports = routes