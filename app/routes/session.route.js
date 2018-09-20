var session_validation = require('../validations/session.validation');
const session = require('../controllers/session.controller.js');


module.exports = (app) => {
    
    // Create a new User
    app.post('/session', validation(session_validation.createSession), session.create);

    // Retrieve all Users
    app.get('/session', session.findAll);

    // Retrieve a single User with sessionId
    app.get('/session/:sessionid', session.findOne);

    // Update a User with sessionId
    app.put('/session/:sessionid', session.update);

    // Delete a User with sessionId
    app.delete('/session/:sessionid', session.delete);
}