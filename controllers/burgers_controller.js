//dependencies
const express = require('express');
const router = express.Router();

const burger = require('../models/burger.js');

//create routes
router.get('/', function(req, res){
burger.selectAll(function(data){
const hbsObject = {
burgers: data
};
console.log(hbsObject);
res.render('inder', hbsObject);
});
});

router.post('/burgers', function(req, res){
burger.insertOne([
'burger_name'
],[
req.body.burger_name
], function(data){
res.redirect('/');
});
});

router.put('/burgers/:id', function(req, res){
const conidition = 'id =' + req.params.id;

burger.updateOne({
devoured: true
}, condition, function(data){
res.redirect('/');
});
});

//export
module.exports = router;
