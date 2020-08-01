const Joi = require('@hapi/joi');


const validationPlayers =(data)=>{
    const schema = Joi.object({ prenom: Joi.string() .min(2).max(255) .required(),
       // Age: Joi.min(07).max(90)
        });

        return schema.validate(data);
}




module.exports.validationPlayers=validationPlayers;