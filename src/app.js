"use strict";


//
// import express
var express = require('express');
var router = require('./api');


//
// create server instance
var app = express();


// static middleware to serve static files from public directory
// this serves our angular application from the public directory
app.use('/', express.static('public'));


// we use the api namespace on the router
// so we dont conflict with front end routes
app.use('/api', router);


//
//
app.listen(3000, function() {
    console.log('welcome creatures...follow port '+3000);
});
