var session_validation = require('../validations/session.validation');
const session = require('../controllers/session.controller.js');


module.exports = (app) => {
    
    // Create a new User
    app.post('/session', validation(session_validation.createSession), session.create);

    // Retrieve all Users
    app.get('/session', session.findAll);

    // Retrieve a single User with sessionId
    app.get('/session/:sesid',validation(session_validation.getSession), session.findOne);

    // Update a User with sessionId
    app.put('/session/:sesid', validation(session_validation.updateSession),session.update);

    // Delete a User with sessionId
    app.delete('/session/:sesid', validation(session_validation.getSession),  session.delete);
}