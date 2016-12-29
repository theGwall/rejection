"use strict";


var express = require('express'),
 todos      = require('../../mock/todos.json'),
 router     = express.Router();


router.get('/todos', function(req, res) {
    res.json({todos:todos});
});

// TODO: Add POST route to create new entry

// TODO: Add PUT route to update existing entries

// TODO: Add DELETE route to delete todo


module.exports = router;
