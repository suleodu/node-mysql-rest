module.exports = (app) => {
    
    const session = require('../controllers/session.controller.js');

    // Create a new User
    app.post('/session', session.create);

    // Retrieve all Users
    app.get('/session', session.findAll);

    // Retrieve a single User with sessionId
    app.get('/session/:sessionid', session.findOne);

    // Update a User with sessionId
    app.put('/session/:sessionid', session.update);

    // Delete a User with sessionId
    app.delete('/session/:sessionid', session.delete);
}