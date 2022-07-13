/**
 *source: https://app.betrybe.com/course/live-lectures/sd-cohort-19-b#aula-234-arquitetura-de-software-testando-as-camadas
 */

// Professor Leandro
const runSchema = (schema) => (value) => schema.validate(value);

module.exports = {
  runSchema,
};