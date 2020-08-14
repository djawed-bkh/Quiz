const express = require('express');
const body_parser= require('body-parser');
const dotenv = require('dotenv');
const mongoose= require('mongoose');
const hapi = require('@hapi/joi');
const paginate = require('express-paginate');

const app = express();

const jeuRoutes= require('./routes/Jeu');
const JoueursRoute=require('./routes/JoueurName');





//Database connexions
    dotenv.config();

    // Player db connection
    mongoose.connect(process.env.DB_PLAYER_CONNECTION, {useNewUrlParser: true,  useUnifiedTopology: true }, (err)=>{
        if(err){ console.log("failed to connect to Player DATABASE ");}
        else{
            console.log("connected successfuly to player DATABASE")
        }

    });

    //Quiz db connection
    mongoose.connect(process.env.DB_QUESTION_CONNECTION,{useNewUrlParser: true,  useUnifiedTopology: true }, (err)=>{
        if(err){ console.log("failed to connect to Quiz DATABASE ");}
        else{
            console.log("connected successfuly to Quiz DATABASE")
        }
    });




app.set('view engine','ejs');




// middlewares

app.use(body_parser.json());
app.use(express.urlencoded({extended:false}));
app.use('/Quiz/name',JoueursRoute);
app.use('/Quiz/Jeu',jeuRoutes);






app.listen(3000,()=> {
    console.log("server is listening");
})