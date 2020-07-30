const mongoose = require('mongoose');


const schemaPopostion = mongoose.Schema({
proposition: String,
sollution:Boolean,

});

const QuizSchema = mongoose.Schema({

    question:{
      enonce: String,
      popostion: [schemaPopostion]

        
},

});


const joueursSchema= mongoose.Schema({
 prenom:{
     type:String,
     require: true,
 },
 Age:{
    type: Number,
    require: true
 }



});


module.exports = {
QuizSchema : QuizSchema,
JoueursSchema :  joueursSchema,
Schemaproposition :schemaPopostion

}