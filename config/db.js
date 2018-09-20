const mysql = require('mysql');


 let connection =  mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "!Opensecsemy2",
        database: 'cbt_laravel'
      });
      
connection.connect((err) => {
    if(err){
        console.error('databse connection error', err.message);
    }
    
    console.log('db connected successfully');
});

module.exports = connection;
