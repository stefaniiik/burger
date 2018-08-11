// Need ORM file
const orm = require('../config/orm.js');

const burger = {
    selectAll: function(cb) {
        orm.selectALL('burgers', function(res) {
            cb(res);
        })
    },

    insertOne: function (cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, function(res){
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, function(res){
            cb(res);
        })
    }
};

// export
module.exports = burger;