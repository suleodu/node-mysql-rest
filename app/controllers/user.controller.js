//const conn = require('../../config/db.js');

// Create and Save a new Note
exports.create = (req, res) => {
    let post = req.body;
    let sql = conn.format(`INSERT INTO CBT_users 
                            (userid, fname, lname, mname, email, password, progid, status, access, is_login, created_at, updated_at ) 
                            VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
                            [   post.userid, 
                                post.fname, 
                                post.lname,
                                post.mname,
                                post.email,
                                post.password,
                                post.progid || 1,
                                post.status,
                                post.access,
                                post.is_login || 'false',
                                CURRENT_TIMESTAMP, 
                                CURRENT_TIMESTAMP
                            ]
                        );
    conn.query(sql, (error, results, fields) => {
        if(error){
            res.status(404).json(error.message);
        }
        res.json(results);
    });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    let sql = `SELECT * FROM CBT_users`;
    conn.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        res.json(results);
    });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
   
    
    let sql = `SELECT * FROM CBT_users WHERE userid = ? `;
    conn.query(sql, [req.params.userid], (error, results, fields) => {
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