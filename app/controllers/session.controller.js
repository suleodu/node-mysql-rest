// Create and Save a new Note
exports.create = (req, res) => {
    let post = req.body;
    let sql = conn.format(`INSERT INTO CBT_sessions 
                            (sesname, passmark, status, created_at, updated_at ) 
                            VALUES(?, ?, ?, ?, ?)`, 
                            [   post.sesname, 
                                post.passmark, 
                                post.status, 
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
    let sql = `SELECT * FROM CBT_sessions `;
    conn.query(sql, (error, results, fields) => {
        if (error) {
            res.status(404).json(error.message);
        }
        res.json(results);
    });
};

// Find a single note with a noteId
exports.findOne = (req, res) => { 
    let sql = `SELECT * FROM CBT_sessions WHERE sesid = ? `;
    conn.query(sql, [req.params.sesid], (error, results, fields) => {
        if (error) {
            res.status(404).json(error.message);
        }
        res.json(results);
    });
    
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    let post = req.body;
    
    let sql = conn.format(`UPDATE CBT_sessions SET ?, updated_at = ? WHERE sesid = ? `, [post, CURRENT_TIMESTAMP, req.params.sesid]); 
    conn.query(sql, (error, results, fields) => {
        if(error){
            res.status(404).json(error.message);
        }
        res.json(results);
    });
};


// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    let sql = conn.format(`DELETE FROM CBT_sessions  WHERE sesid = ? `, [req.params.sesid]); 
    conn.query(sql, (error, results, fields) => {
        if(error){
            res.status(404).json(error.message);
        }
        res.json(results);
    });
};