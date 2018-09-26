
module.exports = (app) => {
    
    const user = require('../controllers/user.controller.js');

    // Create a new User
    app.post('/user', user.create);

    // Retrieve all Users
    app.get('/user', user.findAll);

    // Retrieve a single User with userId
    app.get('/user/:userid', user.findOne);

    // Update a User with userId
    app.put('/user/:userid', user.update);

    // Delete a User with userId
    app.delete('/user/:userid', user.delete);
}