/**
 * source: https://app.betrybe.com/course/live-lectures/sd-cohort-19-b#aula-234-arquitetura-de-software-testando-as-camadas
 */

// lecture/23.4
const Joi = require('joi');
const { runSchema } = require('../utils/runSchema');

// Identifica e lança o erro
const errorsOfJoi = (body) => {
 body.forEach(({ productId, quantity }) => {
   const schema = Joi.object({
     productId: Joi.number().not().empty().required(),
     quantity: Joi.number().min(1).not().empty()
.required(),
   }); // source: https://github.com/sideway/joi/issues/2371 -> ensina a usar o .min como greater than
  //  const { error } = schema.validate({ productId, quantity });
   const { error } = runSchema(schema)({ productId, quantity });
   if (error) {
     throw error;
   }
 }); 
};

module.exports = { errorsOfJoi };
