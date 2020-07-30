const express = require('express');

const app = express();

const jeuRoutes= require('./routes/Jeu');
const JoueursRoute=require('./routes/JoueurName');








// middlewares
app.use('/Quiz/Joueurs',JoueursRoute);
app.use('/Quiz/Jeu',jeuRoutes);





app.listen(3000,()=> {
    console.log("serveur en ecoute");
})