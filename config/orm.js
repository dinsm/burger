var connection = require('./connection.js');

var orm = {
    selectAll: function(table,cb) {
        var dbQuery = "SELECT * FROM burgers"; //"SELECT * FROM ??";
        connection.query(dbQuery,[table], function(err,result) {
            if(err) {throw err;}
            cb(result);
        });
    },

    create: function(table, cols, vals, cb) {
        var dbQuery = "INSERT INTO burgers (name) VALUES (?)"; //"INSERT INTO ?? (??) VALUES (?)";
        connection.query(dbQuery,[table, cols, vals],function(err, result) {
            if(err) {throw err;}
            cb(result);
        });
    },

    update: function(table, col, ObjColVals,id,cb) {
        var dbQuery = "UPDATE burgers SET devoured=? WHERE id=?"; //"UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(dbQuery, [table, col, ObjColVals, id], function(err, result) {
            if(err) {throw err;}
            cb(result);
        })
    }
};

// Export the ORM object in module.exports.
module.exports = orm;