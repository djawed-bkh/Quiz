const mongoose = require('mongoose');


const schemaPopostion = mongoose.Schema({
    proposition: String,
    sollution: Boolean

});


const QuizSchema = mongoose.Schema({


    enonce: String,
    proposition: [schemaPopostion]



});

const Quiz = mongoose.model("QuizCollection", QuizSchema);


const joueursSchema = mongoose.Schema({
    prenom: {
        type: String,
        require: true,
    },
    Age: {
        type: Number,
        require: true
    },
    Score: {
        type: Number,
        default: 0
    }



});


const joueurs = mongoose.model("joueurCollections", joueursSchema);

module.exports = {
    QuizSchema: Quiz,
    JoueursSchema: joueurs

}