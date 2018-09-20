const express = require('express');
const bodyParser = require('body-parser');
const Cors = require("cors");


// create express app
const app = express();
//set cross origin
app.use(Cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// Configuring the database
global.conn = require('./config/db.js');



// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

//Require Notes routes
require('./app/routes/user.route.js')(app);

//Require Notes routes
require('./app/routes/session.route.js')(app);

//
//// Require Notes routes
//require('./app/routes/session.routes.js')(app);

// listen for requests
app.listen(3001, () => {
    console.log("Server is listening on port 3001");
});