const express = require('express');
const body_parser= require('body-parser');
const dotenv = require('dotenv');
const app = express();

const jeuRoutes= require('./routes/Jeu');
const JoueursRoute=require('./routes/JoueurName');




app.set('view engine','ejs');




// middlewares
app.use(body_parser.json());

app.use('/Quiz/name',JoueursRoute);
app.use('/Quiz/Jeu',jeuRoutes);





app.listen(3000,()=> {
    console.log("serveur en ecoute");
})