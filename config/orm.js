const connect = require('./connection.js');


//help generate mysql syntax
function printQuestionMarks(num) {
    const arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    returnarr.toString();
}

function objToSql(ob) {

    const arr = [];

    for (var key in ob) {
        arr.push(key + "=" + ob[key]);
    }
    return arr.toString();
}

//orm to perform SQL queries
const orm = {

    selectALL: function (tableInput, cb) {

        var queryString = "SELECT * FROM " + tableInput + ";";

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    //insert a single table entry

    insertOne: function (table, cols, vals, cb) {

        var queryString = "INSERT INTO" + table;

        queryString += "(";
        queryString += cols.toString();
        queryString += ")";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ")";

        console.log(queryString);

        //perform DB query
        connection.query(queryString, vals, function (err, results) {
            if (err) {
                throw err,
}
            cb(result);
        });
    },

    //updates single table entry
    updateOne: function (table, objColVals, condition, cb) {

        const queryString = "UPDATE" + table;

        queryString += "SET";
        queryString += objToSql(objColVals);
        queryString += "WHERE";
        queryString += condition;

        console.log(queryString);

        //DB query
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

//export
module.exports = orm;
