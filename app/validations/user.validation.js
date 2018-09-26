var Joi = require('joi');



module.exports = {
  // POST /api/tasks
  createUser: {
    body: {
      userid: Joi.string().required(),
      fname: Joi.string().required(),
      lname: Joi.string().required(),
      mname: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
      progid: Joi.string().required(),
      status: Joi.string().required(),
      access: Joi.string().required(),
      is_login: Joi.string().required(),
      remeber_token: Joi.string().required()
    }
  },

  // GET-PUT-DELETE /api/tasks/:taskId
  getUser: {
    params: {
      userid: Joi.string().required()
    }
  },

  // PUT /api/tasks/:taskId
  updateUser: {
    params: {
      userid: Joi.number().required()
    },
    body: {
      userid: Joi.string(),
      fname: Joi.string(),
      lname: Joi.string(),
      mname: Joi.string(),
      email: Joi.string(),
      password: Joi.string(),
      progid: Joi.string(),
      status: Joi.string(),
      access: Joi.string(),
      is_login: Joi.string(),
      remeber_token: Joi.string(),
    }
  }
};