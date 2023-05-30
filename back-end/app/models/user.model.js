const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('User', {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  alzheimerStade: Joi.string(),
  assistance: Joi.string().required(),
  photo: Joi.string(),
  quizSessions: Joi.array(Joi.quizSessions()),
  timer: Joi.number(),
})

module.exports = new BaseModel('QuizSession', {
  date: Joi.number().required(),
  quizId: Joi.string().required(),
  answers: Joi.array(Joi.Answer()),
  timePerQuestion: Joi.array(Joi.number()),
})