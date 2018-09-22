const express = require('express');
const bodyParser = require('body-parser');
global.moment = require('moment');
global.validation = require('express-validation');
// Configuring the database
global.conn = require('./config/db.js');
const Cors = require("cors");


// create express app
const app = express();
//set cross origin
app.use(Cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

//Require Notes routes
require('./app/routes/user.route.js')(app);

//Require Notes routes
require('./app/routes/session.route.js')(app);

app.use((err, req, res, next) => {
  if (err instanceof validation.ValidationError) {
    res.status(err.status).json(err);
  } else {
    res.status(500)
      .json({
        status: err.status,
        message: err.message
      });
  }
});

// listen for requests
app.listen(3001, () => {
    console.log("Server is listening on port 3001");
});