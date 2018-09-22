var Joi = require('joi');



module.exports = {
  // POST /api/tasks
  createSession: {
    body: {
      sesname: Joi.string().required(),
      passmark: Joi.number().required(),
      status: Joi.string().required()
    }
  },

  // GET-PUT-DELETE /api/tasks/:taskId
  getSession: {
    params: {
      sesid: Joi.number().required()
    }
  },

  // PUT /api/tasks/:taskId
  updateSession: {
    params: {
      sesid: Joi.number().required()
    },
    body: {
      sesname: Joi.string(),
      passmark: Joi.number(),
      status: Joi.string()
    }
  }
};