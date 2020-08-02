const Joi = require('@hapi/joi');


const validationPlayers =(data)=>{
    const schema = Joi.object({ prenom : Joi.string() .min(2).max(255) .required(),
        Age : Joi.number().required()
        });

        return schema.validate(data);
}




module.exports.validationPlayers=validationPlayers;