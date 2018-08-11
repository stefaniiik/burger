const connection = require('../config/connection.js');


//help generate mysql syntax
function printQuestionMarks(num) {
    const arr = [];

    for (let i = 0; i < num; i++) {
        arr.push("?");
    }
    returnarr.toString();
}
//convert obj key to pairs
function objToSql(ob) {

    const arr = [];

//loop through the keys 
    for (let key in ob) {
        const value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
            value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
    }
    }
    return arr.toString();
}

//orm to perform SQL queries
const orm = {

    selectALL: function (tableInput, cb) {

        let queryString = "SELECT * FROM " + tableInput + ";";

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
        connection.query(queryString, vals, function (err, result){
            if (err) {
                throw err;
            }
                cb(result);
        });

    },
    //updates single table entry
    updateOne: function (table, objColVals, condition, cb){

        let queryString = "UPDATE" + table;

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
