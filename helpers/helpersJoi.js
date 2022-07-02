const Joi = require('joi');

// Identifica e lança o erro
const errorsOfJoi = (body) => {
 body.forEach(({ productId, quantity }) => {
   const schema = Joi.object({
     productId: Joi.number().not().empty().required(),
     quantity: Joi.number().min(1).not().empty()
.required(),
   }); // https://github.com/sideway/joi/issues/2371
   const { error } = schema.validate({ productId, quantity });
   if (error) {
     throw error;
   }
 }); 
};

module.exports = { errorsOfJoi };
