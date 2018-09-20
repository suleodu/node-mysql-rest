//const conn = require('../../config/db.js');

// Create and Save a new Note
exports.create = (req, res) => {


};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    let sql = `SELECT * FROM CBT_sessions`;
    conn.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        res.json(results);
    });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    if(req.params.userid === ''){
       return console.error("Required parameter is missing "); 
    }
    
    let sql = `SELECT * FROM CBT_sessions WHERE sesid = ? `;
    conn.query(sql, [req.params.sesid], (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        res.json(results);
    });
    
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

};